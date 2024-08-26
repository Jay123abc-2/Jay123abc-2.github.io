<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="icon" href="Icons/Logo.png">
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="HomePage/home.css">

</head>
<body>
    <?php include "Navigation.php"?>
    <div>
        <h1> Home </h1>
        <a href="index.php">
            <img src = "Icons/Logo.png" id = "homebutton"/>
        </a>
        
    </div>
    
    
    <div id = "PageOptionsMenu">
        <a href="Countdown/countdown.php" class="pageoption"> Countdowns </a>
        <a class="pageoption"> Something Else </a>
    </div>
</body>
</html>