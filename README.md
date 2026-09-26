# DOKMON — Document Monitoring System

DOKMON (Document Monitoring) is a web-based document monitoring system designed to help users monitor document status, revision information, and document review periods through a centralized dashboard.

## Overview

DOKMON provides a simple interface for monitoring important documents and identifying documents that require attention based on their age.

The system automatically classifies documents into three categories:

* 🟢 **Dokumen Baru** — documents less than or equal to 1 year old
* 🟡 **Perlu Ditinjau** — documents more than 1 year and up to 2 years old
* 🔴 **Harus Diperbaharui** — documents more than 2 years old

## Features

* 🔐 Employee login interface
* 📊 Document monitoring dashboard
* 📄 Structured document information table
* 📅 Automatic document status classification
* ✏️ Document revision and date updates
* 📧 Email notification for documents requiring renewal

## Technologies

* **HTML5** — page structure
* **Tailwind CSS** — user interface styling
* **JavaScript** — dynamic content and application logic
* **EmailJS** — email notification integration

## Project Structure

```text
DOKMON/
├── index.html
├── login.html
└── dashboard.html
```

### Pages

**`index.html`**
Landing page containing the DOKMON introduction and navigation.

**`login.html`**
Login interface for accessing the document monitoring dashboard.

**`dashboard.html`**
Main dashboard for displaying document information, calculating document status, updating revisions, and triggering email notifications.

## Workflow

```text
Document Data
      ↓
Document Date
      ↓
Calculate Document Age
      ↓
Classify Document Status
      ↓
Display on Dashboard
      ↓
Renewal Required?
      ↓
Email Notification
```



## Purpose

DOKMON was developed as a practical web development project to explore the implementation of a document monitoring and reminder system using frontend web technologies.

## Author

**Rut Omega Purba**

Mathematics Student | Data & Software Enthusiast
