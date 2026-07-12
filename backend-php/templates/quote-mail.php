<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="margin:0;padding:25px;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">

    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        <tr>
            <td align="center">

                <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="
            width:100%;
            max-width:700px;
            background:#ffffff;
            border-radius:12px;
            overflow:hidden;
            border:1px solid #e5e7eb;
        ">

                    <tr>
                        <td style="
        background:#0f172a;
        padding:30px;
        color:#ffffff;
        ">

                            <h2 style="margin:0;font-size:26px;">
                                📩 New Project Quote Request
                            </h2>

                            <p style="margin:10px 0 0;color:#cbd5e1;font-size:15px;">
                                A new client has submitted a Request for Quote form.
                            </p>

                        </td>
                    </tr>

                    <tr>
                        <td style="padding:30px;">

                            <h3 style="margin:0 0 18px;color:#111827;">
                                Client Information
                            </h3>

                            <table style="
        width:100%;
        border-collapse:collapse;
        font-size:15px;
        ">

                                <tr style="background:#f8fafc;">
                                    <td style="padding:12px;border:1px solid #e5e7eb;font-weight:bold;width:220px;">
                                        Full Name
                                    </td>

                                    <td style="
        padding:12px;
        border:1px solid #e5e7eb;
        word-break:break-word;
        overflow-wrap:anywhere;
        ">
                                        <?= htmlspecialchars($firstName) ?> <?= htmlspecialchars($lastName) ?>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:12px;border:1px solid #e5e7eb;font-weight:bold;">
                                        Email
                                    </td>

                                    <td style="
        padding:12px;
        border:1px solid #e5e7eb;
        word-break:break-word;
        overflow-wrap:anywhere;
        ">
                                        <?= htmlspecialchars($email) ?>
                                    </td>
                                </tr>

                                <tr style="background:#f8fafc;">
                                    <td style="padding:12px;border:1px solid #e5e7eb;font-weight:bold;">
                                        Phone
                                    </td>

                                    <td style="padding:12px;border:1px solid #e5e7eb;">
                                        <?= htmlspecialchars($phone) ?>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:12px;border:1px solid #e5e7eb;font-weight:bold;">
                                        Company
                                    </td>

                                    <td style="
        padding:12px;
        border:1px solid #e5e7eb;
        word-break:break-word;
        overflow-wrap:anywhere;
        ">
                                        <?= htmlspecialchars($companyName) ?>
                                    </td>
                                </tr>

                                <tr style="background:#f8fafc;">
                                    <td style="padding:12px;border:1px solid #e5e7eb;font-weight:bold;">
                                        Website
                                    </td>

                                    <td style="
        padding:12px;
        border:1px solid #e5e7eb;
        word-break:break-word;
        overflow-wrap:anywhere;
        ">
                                        <?= htmlspecialchars($website) ?>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:12px;border:1px solid #e5e7eb;font-weight:bold;">
                                        Country
                                    </td>

                                    <td style="padding:12px;border:1px solid #e5e7eb;">
                                        <?= htmlspecialchars($country) ?>
                                    </td>
                                </tr>

                                <tr style="background:#f8fafc;">
                                    <td style="padding:12px;border:1px solid #e5e7eb;font-weight:bold;">
                                        Preferred Contact
                                    </td>

                                    <td style="padding:12px;border:1px solid #e5e7eb;">
                                        <?= htmlspecialchars($preferredContact) ?>
                                    </td>
                                </tr>

                            </table>

                            <div style="height:35px;"></div>

                            <h3 style="margin:0 0 18px;color:#111827;">
                                Project Details
                            </h3>

                            <table style="
        width:100%;
        border-collapse:collapse;
        font-size:15px;
        ">

                                <tr style="background:#f8fafc;">
                                    <td style="padding:12px;border:1px solid #e5e7eb;font-weight:bold;width:220px;">
                                        Service
                                    </td>

                                    <td style="padding:12px;border:1px solid #e5e7eb;">
                                        <?= htmlspecialchars($service) ?>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:12px;border:1px solid #e5e7eb;font-weight:bold;">
                                        Project Type
                                    </td>

                                    <td style="padding:12px;border:1px solid #e5e7eb;">
                                        <?= htmlspecialchars($projectType) ?>
                                    </td>
                                </tr>

                                <tr style="background:#f8fafc;">
                                    <td style="padding:12px;border:1px solid #e5e7eb;font-weight:bold;">
                                        Budget
                                    </td>

                                    <td style="padding:12px;border:1px solid #e5e7eb;">
                                        <?= htmlspecialchars($budget) ?>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:12px;border:1px solid #e5e7eb;font-weight:bold;">
                                        Timeline
                                    </td>

                                    <td style="padding:12px;border:1px solid #e5e7eb;">
                                        <?= htmlspecialchars($timeline) ?>
                                    </td>
                                </tr>

                                <tr style="background:#f8fafc;">
                                    <td style="padding:12px;border:1px solid #e5e7eb;font-weight:bold;">
                                        Project Title
                                    </td>

                                    <td style="
        padding:12px;
        border:1px solid #e5e7eb;
        word-break:break-word;
        overflow-wrap:anywhere;
        ">
                                        <?= htmlspecialchars($projectTitle) ?>
                                    </td>
                                </tr>

                            </table>

                            <div style="height:35px;"></div>

                            <h3 style="margin:0 0 15px;color:#111827;">
                                Project Description
                            </h3>

                            <div style="
        background:#f8fafc;
        border-left:5px solid #2563eb;
        padding:20px;
        border-radius:8px;
        color:#374151;
        font-size:15px;
        line-height:1.8;
        white-space:pre-wrap;
        word-break:break-word;
        overflow-wrap:anywhere;
        ">
                                <?= htmlspecialchars($projectDescription) ?>
                            </div>

                            <?php if (!empty($_FILES['attachment']['name'])): ?>
                                <div style="
        margin-top:30px;
        background:#eff6ff;
        border:1px solid #bfdbfe;
        padding:18px;
        border-radius:8px;
        word-break:break-word;
        overflow-wrap:anywhere;
    ">

                                    <div style="font-size:16px;font-weight:bold;color:#1d4ed8;">
                                        📎 Attachment Included
                                    </div>

                                    <div style="margin-top:8px;color:#374151;">
                                        <?= htmlspecialchars($_FILES['attachment']['name']) ?>
                                    </div>

                                </div>
                            <?php endif; ?>

                        </td>
                    </tr>

                    <tr>
                        <td style="
        background:#f3f4f6;
        padding:18px;
        text-align:center;
        font-size:13px;
        color:#6b7280;
        border-top:1px solid #e5e7eb;
        ">

                            This email was automatically generated from the
                            <strong>Indo Sparsh Studio</strong> Request a Quote form.

                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>

</body>

</html>