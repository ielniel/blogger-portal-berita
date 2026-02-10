# Google Analytics 4 Setup Guide

## Table of Contents
1. [Account Creation](#account-creation)
2. [Web Stream Setup](#web-stream-setup)
3. [Event Tracking](#event-tracking)
4. [Dashboard Creation](#dashboard-creation)

---

## Account Creation
1. Go to the [Google Analytics](https://analytics.google.com/) website.
2. Click on **Start for free**.
3. Sign in with your Google account or create a new one.
4. Once signed in, click on **Admin** in the lower left corner.
5. In the **Account** column, click on **Create Account**.
6. Fill in your account name and configure the data sharing settings as desired.
7. Click on **Next** to set up the property.

## Web Stream Setup
1. In the **Property** column, click on **Create Property**.
2. Enter your property name, select the reporting currency, and set the time zone.
3. Click on **Next** to choose your business information.
4. Click on **Create** to finalize the property setup.
5. Go to **Data Streams** under the Property column.
6. Select **Web** to add a new web stream.
7. Enter your website URL and stream name, then click **Create Stream**.
8. Copy the **Measurement ID** to use it in your website.

## Event Tracking
1. Go back to your website and integrate the **Global Site Tag (gtag.js)**. You can find the code snippet in the **Web Stream Details**.
2. To track events, use the following code snippet:
   ```javascript
   gtag('event', 'event_name', {
     'event_category': 'category_name',
     'event_label': 'label_name',
     'value': value_number
   });
   ```
3. Replace `event_name`, `category_name`, `label_name`, and `value_number` with your own values depending on the event you want to track.

## Dashboard Creation
1. Go to the **Reports** section in Google Analytics.
2. Select **Customization** and click on **Dashboards**.
3. Click on **Create** to make a new dashboard.
4. Choose to create a **Blank Canvas** or use a **Starter Dashboard**.
5. Add your desired widgets using options such as metrics, tables, or Pie charts.
6. Click on **Save** to keep your dashboard accessible for future use.

---

This guide should provide you with a comprehensive overview of setting up Google Analytics 4 for your website. For more detailed instructions, you can refer to the official [Google Analytics Help Center](https://support.google.com/analytics/).