<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown Clock</title>
    <link rel="icon" href="../Icons/Logo.png">
    <link rel="stylesheet" href="../main.css">
    <link rel="stylesheet" href="style.css">
    
</head>
<body>
    <h2> Time remaining to fill with code: </h2>
    <div class="clock" id="clock1">
        <div data-value="days"></div>
        <div data-value="hours"></div>
        <div data-value="minutes"></div>
        <div data-value="seconds"></div>
    </div>
    <div style="text-align: left;">
        <a href="../index.php">
            <img src = "../Icons/Logo.png" id = "homebutton"/>
        </a>
    </div>
    <script src="countdown.js"></script>
    <script src="init.js"></script>
</body>
</html>