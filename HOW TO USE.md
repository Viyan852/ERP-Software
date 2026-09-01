# HOW TO USE ERP GlassOS

## Overview

ERP GlassOS is a modern ERP companion dashboard designed to provide a more organized and visually appealing way to view academic ERP data.

The platform focuses on:

- Homework Management
- Circular Tracking
- Timetable Viewing
- Attachment Analysis
- Timestamp Recovery
- Exports
- Analytics
- Developer Tools

ERP GlassOS is designed as a companion dashboard and is not a replacement for an official ERP platform.

---

# Important Compatibility Notice

⚠️ ERP GlassOS is NOT a universal ERP solution.

ERP systems vary significantly in:

- Authentication methods
- URL structures
- Page layouts
- Database structures
- HTML markup
- File naming conventions

Because of this:

✅ Some ERP platforms may work correctly.

✅ Similar ERP platforms may require minor modifications.

❌ Many ERP platforms will require parser customization.

Before deployment, test the application with your ERP environment.

---

# Supported Features

## Dashboard

Displays:

- Homework Summary
- Circular Summary
- Pending Work
- Completed Work
- Attachments
- Recent Upload Activity

---

## Homework

View:

- Subject
- Date
- Description
- Attachments
- Status

Features:

- Search
- Sort
- Filters
- Exports

---

## Circulars

View:

- Circular Name
- Date
- Category
- Attachments

Features:

- Search
- Filters
- Export Options

---

## Timetable

Display:

- Daily Timetable
- Weekly Timetable
- Examination Timetable

---

## Attachment Explorer

View:

- Filename
- File Extension
- Attachment Metadata
- Recovered Timestamps

Supported:

- PDF
- DOCX
- XLSX
- JPG
- PNG

---

# Timestamp Recovery

ERP GlassOS can detect Unix timestamps embedded inside filenames.

Example:

```text
Assignment.1787729246.pdf
```

Detected Timestamp:

```text
1787729246
```

Recovered Time:

```text
26 Aug 2026
12:27:26 AM
```

This feature depends on the ERP storing timestamps inside filenames.

Some ERP systems may not provide recoverable timestamps.

---

# Privacy Policy

ERP GlassOS is designed with privacy as a primary goal.

The application:

✅ Does not store passwords

✅ Does not store session cookies

✅ Does not store authentication tokens

✅ Does not store CSRF tokens

✅ Does not access privileged areas

✅ Operates in read-only mode

✅ Shows only information available to the user

---

# Installation

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# Production Build

Build:

```bash
npm run build
```

Run:

```bash
npm run start
```

---

# Export Features

Supported Formats:

- CSV
- XLSX
- JSON
- PDF

Exports can include:

- Homework
- Circulars
- Analytics
- Attachments

---

# Developer Tools

ERP GlassOS includes:

- Request Viewer
- Parser Viewer
- Timestamp Recovery Logs
- System Information
- Export Logs

Sensitive information is hidden automatically.

---

# Things You May Need To Upgrade

Depending on your ERP, you may need to modify:

## Authentication

Examples:

- Session Authentication
- Token Authentication
- OAuth
- SSO Integrations

Location:

```text
Authentication Layer
```

---

## Homework Parser

If homework entries change format:

```text
Subject
Date
Description
Attachment
```

the parser may need updates.

Location:

```text
Parser Modules
```

---

## Circular Parser

Changes may be required if your ERP stores circulars differently.

---

## Attachment Detection

If file URLs differ from
