<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\StripeHelperTrait;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    use StripeHelperTrait;

    public function index()
    {
        $account = User::find(auth()->user()->id)->account;

        $secret = $this->createSetupIntent($account->customer_id);

        $payment_method = $this->getPaymentMethods($account->customer_id);

        return Inertia::render('Dashboard', [
            'user' => User::find(auth()->user()->id),
            'account' => $account,
            'client_secret' => $secret,
            'payment_method' => $payment_method
        ]);
    }
}
