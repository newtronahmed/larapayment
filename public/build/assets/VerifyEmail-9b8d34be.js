import{W as s,j as t,a as e,Y as a,b as d}from"./app-698d4613.js";import{G as l}from"./GuestLayout-b7c64005.js";import{P as m}from"./PrimaryButton-e31cbd72.js";import"./ApplicationLogo-e782dcf6.js";function y({status:i}){const{post:n,processing:o}=s({});return t(l,{children:[e(a,{title:"Email Verification"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),i==="verification-link-sent"&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e("form",{onSubmit:r=>{r.preventDefault(),n(route("verification.send"))},children:t("div",{className:"mt-4 flex items-center justify-between",children:[e(m,{disabled:o,children:"Resend Verification Email"}),e(d,{href:route("logout"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Log Out"})]})})]})}export{y as default};
