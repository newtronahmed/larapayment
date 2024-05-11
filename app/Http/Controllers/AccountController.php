<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use App\Traits\StripeHelperTrait;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AccountController extends Controller
{
    use StripeHelperTrait;
    public function index(Request $request, $userId){

        return Inertia::render('Auth/CreateAccount', [
            // 'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            // 'registration' => session('status'),
            "userId"=> $userId
        ]);
    }
    public function create(Request $request){
        // $user_id = session('registered_user_id');
        $user = User::find($request->userId)->first();
        $customer = $this->createCustomer($user->email, $user->name);

        Account::create([
            'user_id' => $user->id,
            'balance' => 0,
            'customer_id' => $customer->id,
            'address1' => $request->address1,
            'address2' => $request->address2,
            'city' => $request->city,
            'state' => $request->state,
            'zip' => $request->zip
        ]);

        event(new Registered($user));

        Auth::login($user);

        // return response()->noContent();
        return redirect(RouteServiceProvider::HOME);
    }

}
