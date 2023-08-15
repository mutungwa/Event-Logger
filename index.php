<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Work Event Logger</title>
</head>
<body>
    <h1>Work Event Logger</h1>
    <form id="signInForm">
        <label for="signInName">Name:</label>
        <input type="text" id="signInName" required>
        <button type="submit">Sign In</button>
    </form>
    <form id="signOutForm">
        <label for="signOutName">Name:</label>
        <input type="text" id="signOutName" required>
        <button type="submit">Sign Out</button>
    </form>
    <div id="eventLog">
        <h2>Event Log</h2>
        <ul id="logList"></ul>
    </div>
    <script src="event.js"></script>
</body>
</html>
