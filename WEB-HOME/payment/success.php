<?php
require_once 'config.php';

// Verify PayU response hash
$status = $_POST['status'] ?? '';
$txnid = $_POST['txnid'] ?? '';
$amount = $_POST['amount'] ?? '';
$productinfo = $_POST['productinfo'] ?? '';
$firstname = $_POST['firstname'] ?? '';
$email = $_POST['email'] ?? '';
$udf1 = $_POST['udf1'] ?? '';
$udf2 = $_POST['udf2'] ?? '';
$udf3 = $_POST['udf3'] ?? '';
$udf4 = $_POST['udf4'] ?? '';
$udf5 = $_POST['udf5'] ?? '';
$payuHash = $_POST['hash'] ?? '';
$mihpayid = $_POST['mihpayid'] ?? '';

// Reverse hash validation: sha512(salt|status|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10|email|firstname|productinfo|amount|txnid|key)
$hashString = PAYU_MERCHANT_SALT . '|' . $status . '|' . $udf1 . '|' . $udf2 . '|' . $udf3 . '|' . $udf4 . '|' . $udf5 . '||||||' . $email . '|' . $firstname . '|' . $productinfo . '|' . $amount . '|' . $txnid . '|' . PAYU_MERCHANT_KEY;
$generatedHash = strtolower(hash('sha512', $hashString));

$valid = ($payuHash === $generatedHash && $status === 'success');
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>Donation Successful – Being Sevak</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box;}
body{
  font-family:'Open Sans',sans-serif;
  background:#f4f7fb;
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:20px;
}
.card{
  background:#fff;
  border-radius:24px;
  padding:50px 40px;
  text-align:center;
  max-width:500px;
  width:100%;
  box-shadow:0 20px 60px rgba(0,0,0,0.08);
}
.icon{width:72px;height:72px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:36px;}
.icon.success{background:#e6f7e6;color:#2eb85c;}
.icon.fail{background:#ffe6e6;color:#e53935;}
h2{font-family:'Montserrat',sans-serif;font-size:1.5rem;font-weight:800;color:#1a1a2e;margin-bottom:8px;}
p{color:#4a5568;font-size:0.9rem;line-height:1.6;margin-bottom:6px;}
.details{background:#f9fdff;border:1px solid #d0eaf5;border-radius:12px;padding:16px;margin:20px 0;text-align:left;}
.details .row{display:flex;justify-content:space-between;padding:6px 0;font-size:0.85rem;}
.details .row .label{color:#4a5568;font-weight:600;}
.details .row .value{color:#1a1a2e;font-weight:700;color:#009BD4;}
.btn{
  display:inline-block;
  padding:12px 32px;
  background:linear-gradient(135deg,#009BD4,#046FB1);
  color:#fff;
  border:none;
  border-radius:30px;
  font-size:0.9rem;
  font-weight:600;
  font-family:'Montserrat',sans-serif;
  cursor:pointer;
  text-decoration:none;
  margin-top:10px;
  transition:0.3s;
}
.btn:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(0,162,217,0.3);}
</style>
</head>
<body>
<div class="card">
  <div class="icon <?php echo $valid ? 'success' : 'fail'; ?>">
    <?php echo $valid ? '&#10003;' : '&#10007;'; ?>
  </div>
  <h2><?php echo $valid ? 'Thank You for Your Donation!' : 'Payment Verification Failed'; ?></h2>
  <?php if ($valid): ?>
    <p>Your contribution has been received successfully. Your generosity brings hope and dignity to those in need.</p>
    <div class="details">
      <div class="row"><span class="label">Transaction ID</span><span class="value"><?php echo htmlspecialchars($mihpayid); ?></span></div>
      <div class="row"><span class="label">Order ID</span><span class="value"><?php echo htmlspecialchars($txnid); ?></span></div>
      <div class="row"><span class="label">Amount</span><span class="value">₹<?php echo htmlspecialchars(number_format((float)$amount, 2)); ?></span></div>
      <?php if ($udf1): ?><div class="row"><span class="label">Mission</span><span class="value"><?php echo htmlspecialchars($udf1); ?></span></div><?php endif; ?>
    </div>
    <p style="font-size:0.8rem;color:#999;">A receipt will be sent to <?php echo htmlspecialchars($email); ?></p>
    <a href="../index.html" class="btn">Return to Home</a>
  <?php else: ?>
    <p>The payment response could not be verified. Please contact us at <strong>info@beingsevak.org</strong> with your transaction reference.</p>
    <a href="../donation.html" class="btn">Try Again</a>
  <?php endif; ?>
</div>
</body>
</html>
