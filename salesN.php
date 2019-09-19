<!doctype html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en">
<!--<![endif]-->
<head>
    <?php require_once('inc/head.php'); ?>
    <title>CSI - Sales Representative Locator</title>
    <meta name="description" content="">
    <meta name="author" content="">
</head>
<body id="salesx">
    <!-- Highlight for current page -->
    <?php require_once('inc/headernav.php'); ?>
    <div id="hp_content">
        <div class="hp_content_full float_none">
            <h1>CSI Sales Rep Locator</h1>
            <h3>Please select the primary product you are interested in.</h3>
            <div class="check-boxes" id="filter"></div>
            <h3 id="stateInfo">Select a state to display their contact information...</h3>
            <div id="mapsvg"></div>
            <div id="contactInfo"></div>
            <table id="table" class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody id="contactInfoTable"></tbody>
            </table>
        </div>
        <?php require_once('inc/footer.php'); ?>
        <script src="/js/libs/map.js"></script>
    </div>
</body>
</html>