<?php
require_once 'config.php';

// Collect form data
$txnid = substr(hash('sha256', time() . rand()), 0, 20);
$amount = $_POST['amount'] ?? 0;
$productinfo = $_POST['productinfo'] ?? 'Donation';
$firstname = $_POST['firstname'] ?? 'Donor';
$email = $_POST['email'] ?? PAYU_DEFAULT_EMAIL;
$phone = $_POST['phone'] ?? PAYU_DEFAULT_PHONE;
$udf1 = $_POST['udf1'] ?? ''; // mission name
$udf2 = $_POST['udf2'] ?? ''; // frequency
$udf3 = $_POST['udf3'] ?? ''; // programme
$udf4 = $_POST['udf4'] ?? '';
$udf5 = $_POST['udf5'] ?? '';

// Generate hash: sha512(key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5||||||salt)
$hashString = PAYU_MERCHANT_KEY . '|' . $txnid . '|' . $amount . '|' . $productinfo . '|' . $firstname . '|' . $email
    . '|' . $udf1 . '|' . $udf2 . '|' . $udf3 . '|' . $udf4 . '|' . $udf5 . '||||||' . PAYU_MERCHANT_SALT;
$hash = strtolower(hash('sha512', $hashString));
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Redirecting to PayU...</title>
<style>
* { margin:0; padding:0; box-sizing:border-box; }
body {
  font-family:'Open Sans',sans-serif;
  background:linear-gradient(135deg,#009BD4,#074D97);
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
}
.loader {
  background:#fff;
  border-radius:20px;
  padding:40px 50px;
  text-align:center;
  box-shadow:0 20px 60px rgba(0,0,0,0.2);
  max-width:400px;
}
.spinner {
  width:48px;height:48px;
  border:4px solid #e0e0e0;
  border-top-color:#009BD4;
  border-radius:50%;
  animation:spin 0.8s linear infinite;
  margin:0 auto 20px;
}
@keyframes spin { to { transform:rotate(360deg); } }
.loader p { color:#4a5568; font-size:0.95rem; }
.loader small { color:#999; font-size:0.78rem; margin-top:10px; display:block; }
</style>
</head>
<body>
<div class="loader">
  <div class="spinner"></div>
  <p>Redirecting to secure payment gateway...</p>
  <small>Please do not refresh or press back</small>
</div>
<form method="post" action="<?php echo PAYU_BASE_URL; ?>" id="payuForm" style="display:none;">
  <input type="hidden" name="key" value="<?php echo PAYU_MERCHANT_KEY; ?>"/>
  <input type="hidden" name="txnid" value="<?php echo $txnid; ?>"/>
  <input type="hidden" name="amount" value="<?php echo $amount; ?>"/>
  <input type="hidden" name="productinfo" value="<?php echo $productinfo; ?>"/>
  <input type="hidden" name="firstname" value="<?php echo $firstname; ?>"/>
  <input type="hidden" name="email" value="<?php echo $email; ?>"/>
  <input type="hidden" name="phone" value="<?php echo $phone; ?>"/>
  <input type="hidden" name="udf1" value="<?php echo $udf1; ?>"/>
  <input type="hidden" name="udf2" value="<?php echo $udf2; ?>"/>
  <input type="hidden" name="udf3" value="<?php echo $udf3; ?>"/>
  <input type="hidden" name="udf4" value="<?php echo $udf4; ?>"/>
  <input type="hidden" name="udf5" value="<?php echo $udf5; ?>"/>
  <input type="hidden" name="surl" value="<?php echo PAYU_SURL; ?>"/>
  <input type="hidden" name="furl" value="<?php echo PAYU_FURL; ?>"/>
  <input type="hidden" name="curl" value="<?php echo PAYU_CURL; ?>"/>
  <input type="hidden" name="hash" value="<?php echo $hash; ?>"/>
  <input type="hidden" name="service_provider" value="payu_paisa"/>
</form>
<script>document.getElementById('payuForm').submit();</script>
</body>
</html>
