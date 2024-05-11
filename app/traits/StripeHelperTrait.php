<?php

namespace App\Traits;

trait StripeHelperTrait
{
    function __construct()
    {
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET_KEY'));
    }

    function createCustomer($email, $name)
    {
        $customer = \Stripe\Customer::create([
            'name' => $name,
            'email' => $email
        ]);
        return $customer;
    }
    public function createSetupIntent($customer_id)
    {
        $intent = \Stripe\SetupIntent::create([
            'customer' => $customer_id
        ]);

        return $intent->client_secret;
    }
    public function getPaymentMethods($customer_id)
    {
        $payment_methods = \Stripe\PaymentMethod::all([
            'customer' => $customer_id,
            'type' => 'card'
        ]);
        return $payment_methods;
    }
}
