<?php
// PayU Merchant Credentials
// Replace with your live credentials from PayU dashboard
define('PAYU_MERCHANT_KEY', 'YOUR_MERCHANT_KEY');
define('PAYU_MERCHANT_SALT', 'YOUR_MERCHANT_SALT');

// PayU endpoint - use test for sandbox, secure for live
define('PAYU_BASE_URL', 'https://secure.payu.in/_payment');

// Common params
define('PAYU_DEFAULT_EMAIL', 'info@beingsevak.org');
define('PAYU_DEFAULT_PHONE', '8879035035');

// Return URLs
define('PAYU_SURL', 'http://' . $_SERVER['HTTP_HOST'] . '/payment/success.php');
define('PAYU_FURL', 'http://' . $_SERVER['HTTP_HOST'] . '/payment/failure.php');
define('PAYU_CURL', 'http://' . $_SERVER['HTTP_HOST'] . '/payment/cancel.php');
?>
