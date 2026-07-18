<?php
function careerMailTemplate($data)
{
    $name = htmlspecialchars($data['name']);
    $email = htmlspecialchars($data['email']);
    $phone = htmlspecialchars($data['phone']);
    $experience = htmlspecialchars($data['experience']);
    $role = htmlspecialchars($data['role']);
    $about = nl2br(htmlspecialchars($data['about']));

    return "
<!DOCTYPE html>
<html>
<head>
<meta charset='UTF-8'>
<title>New Career Application</title>
</head>

<body style='margin:0;padding:25px;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;'>

<table width='100%' cellpadding='0' cellspacing='0'>
<tr>
<td align='center'>

<table width='650' cellpadding='0' cellspacing='0' style='background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;'>

<tr>
<td style='background:#0f172a;padding:30px;text-align:center;'>
<h1 style='margin:0;color:#ffffff;font-size:28px;'>New Career Application</h1>
<p style='margin-top:8px;color:#cbd5e1;font-size:15px;'>
A new candidate has submitted an application.
</p>
</td>
</tr>

<tr>
<td style='padding:30px;'>

<table width='100%' cellpadding='10' cellspacing='0' style='border-collapse:collapse;'>

<tr>
<td style='width:180px;background:#f8fafc;font-weight:bold;border:1px solid #e5e7eb;'>Applying For</td>
<td style='border:1px solid #e5e7eb;'>$role</td>
</tr>

<tr>
<td style='background:#f8fafc;font-weight:bold;border:1px solid #e5e7eb;'>Full Name</td>
<td style='border:1px solid #e5e7eb;'>$name</td>
</tr>

<tr>
<td style='background:#f8fafc;font-weight:bold;border:1px solid #e5e7eb;'>Email Address</td>
<td style='border:1px solid #e5e7eb;'>$email</td>
</tr>

<tr>
<td style='background:#f8fafc;font-weight:bold;border:1px solid #e5e7eb;'>Contact Number</td>
<td style='border:1px solid #e5e7eb;'>$phone</td>
</tr>

<tr>
<td style='background:#f8fafc;font-weight:bold;border:1px solid #e5e7eb;'>Experience</td>
<td style='border:1px solid #e5e7eb;'>$experience</td>
</tr>

<tr>
<td style='background:#f8fafc;font-weight:bold;border:1px solid #e5e7eb;vertical-align:top;'>About Candidate</td>
<td style='border:1px solid #e5e7eb;'>$about</td>
</tr>

</table>

<div style='margin-top:30px;padding:18px;background:#f8fafc;border-left:4px solid #2563eb;border-radius:6px;'>

<h3 style='margin:0 0 10px;color:#111827;'>Resume</h3>

<p style='margin:0;color:#374151;line-height:1.7;'>
The candidate's resume is attached to this email as a PDF/DOC/DOCX file.
</p>

</div>

</td>
</tr>

<tr>
<td style='background:#0f172a;padding:18px;text-align:center;color:#cbd5e1;font-size:14px;'>

<strong>IndoSparsh Studio Careers</strong><br>
New Job Application Notification

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
";
}
?>