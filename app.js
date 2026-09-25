<!DOCTYPE html>
<html lang="bn">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Ride Go BD</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
<header><h1>🚀 Ride Go BD</h1><p>বাংলাদেশের সেরা রাইড</p></header>
<div class="card">
<label>আপনার লোকেশন</label>
<input id="pickup" placeholder="যেমন: জিইসি, চট্টগ্রাম">
<label>কোথায় যাবেন</label>
<input id="drop" placeholder="যেমন: নিউ মার্কেট">
<label>রাইডের ধরন</label>
<select id="rideType">
<option value="bike">বাইক - ৳৮০ থেকে</option>
<option value="cng">সিএনজি - ৳১৫০ থেকে</option>
<option value="car">কার - ৳২৫০ থেকে</option>
</select>
<div id="fare" class="fare"></div>
<button id="bookBtn">রাইড বুক করুন</button>
<div id="status" class="status"></div>
</div>
<footer>© 2026 Ride Go BD</footer>
</div>
<script src="app.js"></script>
</body>
</html>
