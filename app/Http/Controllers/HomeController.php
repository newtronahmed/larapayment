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
        try {
            //code...
            $account = User::find(auth()->user()->id)->account;
    
            $secret = $this->createSetupIntent($account->customer_id);
    
            $payment_method = $this->getPaymentMethods($account->customer_id);
        } catch (\Exception $e) {
            $account = null;
            $secret = null;
            $payment_method = null;
            $error = $e->getMessage();
        }

        return Inertia::render('Profile/Index', [
            'user' => User::find(auth()->user()->id),
            'account' => $account,
            'client_secret' => $secret,
            'payment_method' => $payment_method,
            'error' => $error ?? null
        ]);
    }

    public function transactions(){
        $account = User::find(auth()->user()->id)->account;

        // $stripe->balanceTransactions->all(['limit' => 3]);
        $transactions = $this->getTransactions($account->customer_id);

        return Inertia::render('Transactions/Index', [
            'data' => $transactions
        ]);
    }
}
