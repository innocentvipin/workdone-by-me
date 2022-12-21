<html lang="en">
    <head>
        <title>Student Enrollment Form</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </head>
    <body>
        <div class="container">
            <div class ="page-head text-center">
                <h2>Student  enrollment Form</h2>
            </div>
            <form id="empForm" method="GET">
                <div class="form-group">
                    <label>Student ID : </label> 
                   <input type="number" id="stdid" class="form-control" name="stdId" onchange ='getEmp()'>
                </div>
                <div class="form-group">
                    <label>Student Name : </label>
                    <input type="text" id='stdname' class="form-control">
                </div>
                <div class="form-group">
                    <label>Class : </label>
                    <input type='number' id='stdclss' class="form-control">
                </div>
                <div class="form-group">
                    <label>DOB : </label>
                    <input type="number" id='hra' class="form-control">
                 <div class="form-group">
                    <label>Address : </label>
                    <input type="text" id='address' class="form-control">
                </div>
                <div class="form-group">
                    <label>Enrollment-Date : </label>
                    <input type="number" id='deduct' class="form-control">
                </div>
                <div class='form-group text-center'>
                    <button type="button" class="btn btn-lg btn-primary" id="Save" onclick="saveData()" disabled>Save</button>
                    <button type="button" class="btn btn-lg btn-primary" id="change" onclick='changeData()' disabled>Change</button>
                    <button type="button" class="btn btn-lg btn-primary" id="reset" onclick='resetForm()' disabled>Reset</button>
                </div>           
                
            </form>
        </div>
       <script type="text/javascript" src="https://login2explore.com/jpdb/resources/js/0.0.4/jpdb-commons.js"></script>
       <script type="text/javascript" src ="js/index.js"></script>
    </body>
</html>
