var newData = {
  "elements" : [ {
    "id" : "82f7c6d0-f181-4d5a-ae0c-cbcfaf881599",
    "type" : "CRITICAL_EVENTS",
    "status" : "PASSING",
    "parameters" : {
      "eventlog" : "System",
      "mode" : "0",
      "option" : "1",
      "description" : "Critical Events Check - System log, 10 most recent",
      "descriptorid" : 1014
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 0 6 * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-16T21:37:26.986+01:00",
    "updated_at" : "2015-06-16T21:37:26.986+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "DSC" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 0,
    "consecutive_fails_count" : 0
  }, {
    "id" : "2ebc6196-b27e-4fc2-a541-c11f262963ee",
    "type" : "CRITICAL_EVENTS",
    "status" : "PASSING",
    "parameters" : {
      "eventlog" : "Application",
      "mode" : "0",
      "option" : "1",
      "description" : "Critical Events Check - Application log, 10 most recent",
      "descriptorid" : 1014
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 0 6 * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-16T21:37:00.413+01:00",
    "updated_at" : "2015-06-16T21:37:00.413+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "DSC" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 0,
    "consecutive_fails_count" : 0
  }, {
    "id" : "640f81d8-a96b-40cf-8913-3a4e1a90c524",
    "type" : "ANTI_VIRUS",
    "status" : "FAILING",
    "parameters" : {
      "avproduct" : "Windows Defender Antivirus",
      "checkdays" : "_TWTFSS",
      "description" : "Antivirus Update Check - Windows Defender Antivirus",
      "descriptorid" : 1001
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 0 6 * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-16T21:34:56.015+01:00",
    "updated_at" : "2015-06-16T21:34:56.015+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "DSC" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 0,
    "consecutive_fails_count" : 0
  }, {
    "id" : "c93fa021-c4fd-4dc4-ba75-1ab06bbe1ab4",
    "type" : "HACKER_ALERT",
    "status" : "PASSING",
    "parameters" : {
      "logfails" : "99",
      "description" : "Failed Login Check",
      "descriptorid" : 1006
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 0 6 * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-16T21:35:23.576+01:00",
    "updated_at" : "2015-06-16T21:35:23.576+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "DSC" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 0,
    "consecutive_fails_count" : 0
  }, {
    "id" : "UK-618856",
    "type" : "SERVICE",
    "status" : "PASSING",
    "parameters" : {
      "servicename" : "Workstation",
      "failcount" : "1",
      "startpendingok" : "0",
      "restart" : "0",
      "consecutiverestartcount" : "2",
      "cumulativerestartcount" : "4|24",
      "servicekeyname" : "LanmanWorkstation",
      "description" : "Windows Service Check - Workstation",
      "descriptorid" : 1013
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-04T00:25:45+01:00",
    "updated_at" : "2015-06-16T21:35:37.19+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : false,
    "allowed_consecutive_fails" : 1,
    "consecutive_fails_count" : 0
  }, {
    "id" : "UK-618855",
    "type" : "SERVICE",
    "status" : "PASSING",
    "parameters" : {
      "servicename" : "Server",
      "failcount" : "2",
      "startpendingok" : "0",
      "restart" : "0",
      "consecutiverestartcount" : "2",
      "cumulativerestartcount" : "4|24",
      "servicekeyname" : "LanmanServer",
      "description" : "Windows Service Check - Server",
      "descriptorid" : 1013
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-04T00:25:45+01:00",
    "updated_at" : "2015-06-16T21:32:52.537+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 2,
    "consecutive_fails_count" : 0
  }, {
    "id" : "UK-618862",
    "type" : "SERVICE",
    "status" : "PASSING",
    "parameters" : {
      "servicename" : "Windows Management Instrumentation",
      "failcount" : "2",
      "startpendingok" : "0",
      "restart" : "0",
      "consecutiverestartcount" : "2",
      "cumulativerestartcount" : "4|24",
      "servicekeyname" : "Winmgmt",
      "description" : "Windows Service Check - Windows Management Instrumentation",
      "descriptorid" : 1013
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-04T00:25:45+01:00",
    "updated_at" : "2015-06-16T21:34:18.202+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 2,
    "consecutive_fails_count" : 0
  }, {
    "id" : "45f1a38f-69f2-4063-8a60-4a0abf4d8848",
    "type" : "ANTI_VIRUS",
    "status" : "FAILING",
    "parameters" : {
      "avproduct" : "Windows Defender Antispyware",
      "checkdays" : "_TWTFSS",
      "description" : "Antivirus Update Check - Windows Defender Antispyware",
      "descriptorid" : 1001
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 0 6 * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-16T21:34:45.225+01:00",
    "updated_at" : "2015-06-16T21:34:45.225+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "DSC" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 0,
    "consecutive_fails_count" : 0
  }, {
    "id" : "UK-618854",
    "type" : "SERVICE",
    "status" : "PASSING",
    "parameters" : {
      "servicename" : "Group Policy Client",
      "failcount" : "2",
      "startpendingok" : "0",
      "restart" : "0",
      "consecutiverestartcount" : "2",
      "cumulativerestartcount" : "4|24",
      "servicekeyname" : "gpsvc",
      "description" : "Windows Service Check - Group Policy Client",
      "descriptorid" : 1013
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-04T00:25:45+01:00",
    "updated_at" : "2015-06-16T21:32:15.75+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 2,
    "consecutive_fails_count" : 0
  }, {
    "id" : "UK-618860",
    "type" : "SERVICE",
    "status" : "PASSING",
    "parameters" : {
      "servicename" : "System Event Notification Service",
      "failcount" : "2",
      "startpendingok" : "0",
      "restart" : "0",
      "consecutiverestartcount" : "2",
      "cumulativerestartcount" : "4|24",
      "servicekeyname" : "SENS",
      "description" : "Windows Service Check - System Event Notification Service",
      "descriptorid" : 1013
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-04T00:25:45+01:00",
    "updated_at" : "2015-06-16T21:33:26.377+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 2,
    "consecutive_fails_count" : 0
  }, {
    "id" : "UK-618852",
    "type" : "SERVICE",
    "status" : "PASSING",
    "parameters" : {
      "servicename" : "DNS Client",
      "failcount" : "2",
      "startpendingok" : "0",
      "restart" : "0",
      "consecutiverestartcount" : "2",
      "cumulativerestartcount" : "4|24",
      "servicekeyname" : "Dnscache",
      "description" : "Windows Service Check - DNS Client",
      "descriptorid" : 1013
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-04T00:25:45+01:00",
    "updated_at" : "2015-06-16T21:32:04.635+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 2,
    "consecutive_fails_count" : 0
  }, {
    "id" : "4f05cf61-e5e0-4b3b-9133-00838ea75fb8",
    "type" : "CRITICAL_EVENTS",
    "status" : "PASSING",
    "parameters" : {
      "eventlog" : "Security",
      "mode" : "0",
      "option" : "1",
      "description" : "Critical Events Check - Security log, 10 most recent",
      "descriptorid" : 1014
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 0 6 * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-16T21:37:14.642+01:00",
    "updated_at" : "2015-06-16T21:37:14.642+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "DSC" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 0,
    "consecutive_fails_count" : 0
  }, {
    "id" : "UK-618848",
    "type" : "PERFORMANCE_MONITORING_PROCESSOR_UTILISATION",
    "status" : "PASSING",
    "parameters" : {
      "type" : "2",
      "instance" : "",
      "threshold1" : "75",
      "threshold2" : "",
      "threshold3" : "",
      "threshold4" : "",
      "description" : "Performance Monitoring Check - Processor Time",
      "descriptorid" : 1007
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-04T00:25:45+01:00",
    "updated_at" : "2015-06-16T21:31:34.541+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 0,
    "consecutive_fails_count" : 0
  }, {
    "id" : "4b01d048-0cd2-4f7b-bd7b-8cdb2218e929",
    "type" : "SERVICE",
    "status" : "PASSING",
    "parameters" : {
      "servicename" : "Group Policy Client",
      "failcount" : "1",
      "startpendingok" : "0",
      "restart" : "0",
      "consecutiverestartcount" : "2",
      "cumulativerestartcount" : "4|24",
      "servicekeyname" : "gpsvc"
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-16T15:27:42.324+01:00",
    "updated_at" : "2015-06-16T15:27:42.324+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 0,
    "consecutive_fails_count" : 0
  }, {
    "id" : "UK-618858",
    "type" : "SERVICE",
    "status" : "PASSING",
    "parameters" : {
      "servicename" : "Remote Procedure Call (RPC)",
      "failcount" : "2",
      "startpendingok" : "0",
      "restart" : "0",
      "consecutiverestartcount" : "2",
      "cumulativerestartcount" : "4|24",
      "servicekeyname" : "RpcSs",
      "description" : "Windows Service Check - Remote Procedure Call (RPC)",
      "descriptorid" : 1013
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-04T00:25:45+01:00",
    "updated_at" : "2015-06-16T21:32:39.337+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 2,
    "consecutive_fails_count" : 0
  }, {
    "id" : "UK-618853",
    "type" : "SERVICE",
    "status" : "PASSING",
    "parameters" : {
      "servicename" : "Windows Event Log",
      "failcount" : "2",
      "startpendingok" : "0",
      "restart" : "0",
      "consecutiverestartcount" : "2",
      "cumulativerestartcount" : "4|24",
      "servicekeyname" : "EventLog",
      "description" : "Windows Service Check - Windows Event Log",
      "descriptorid" : 1013
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-04T00:25:45+01:00",
    "updated_at" : "2015-06-16T21:34:05.055+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 2,
    "consecutive_fails_count" : 0
  }, {
    "id" : "UK-618851",
    "type" : "SERVICE",
    "status" : "PASSING",
    "parameters" : {
      "servicename" : "DCOM Server Process Launcher",
      "failcount" : "2",
      "startpendingok" : "0",
      "restart" : "0",
      "consecutiverestartcount" : "2",
      "cumulativerestartcount" : "4|24",
      "servicekeyname" : "DcomLaunch",
      "description" : "Windows Service Check - DCOM Server Process Launcher",
      "descriptorid" : 1013
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-04T00:25:45+01:00",
    "updated_at" : "2015-06-16T21:31:52.776+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 2,
    "consecutive_fails_count" : 0
  }, {
    "id" : "UK-618847",
    "type" : "PERFORMANCE_MONITORING_PROCESSOR_QUEUE",
    "status" : "PASSING",
    "parameters" : {
      "type" : "1",
      "instance" : "",
      "threshold1" : "3",
      "threshold2" : "",
      "threshold3" : "",
      "threshold4" : "",
      "description" : "Performance Monitoring Check - Processor Queue",
      "descriptorid" : 1007
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-04T00:25:45+01:00",
    "updated_at" : "2015-06-16T21:31:13.015+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 0,
    "consecutive_fails_count" : 0
  }, {
    "id" : "UK-618857",
    "type" : "SERVICE",
    "status" : "PASSING",
    "parameters" : {
      "servicename" : "TCP/IP NetBIOS Helper",
      "failcount" : "2",
      "startpendingok" : "0",
      "restart" : "0",
      "consecutiverestartcount" : "2",
      "cumulativerestartcount" : "4|24",
      "servicekeyname" : "lmhosts",
      "description" : "Windows Service Check - TCP/IP NetBIOS Helper",
      "descriptorid" : 1013
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-04T00:25:45+01:00",
    "updated_at" : "2015-06-16T21:33:51.392+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 2,
    "consecutive_fails_count" : 0
  }, {
    "id" : "ee41119b-0eac-4f78-b87a-5657cda6b160",
    "type" : "SERVICE",
    "status" : "PASSING",
    "parameters" : {
      "servicename" : "Group Policy Client",
      "failcount" : "1",
      "startpendingok" : "0",
      "restart" : "0",
      "consecutiverestartcount" : "2",
      "cumulativerestartcount" : "4|24",
      "servicekeyname" : "gpsvc"
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-16T15:34:22.324+01:00",
    "updated_at" : "2015-06-16T15:34:22.324+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 0,
    "consecutive_fails_count" : 0
  }, {
    "id" : "UK-618861",
    "type" : "SERVICE",
    "status" : "PASSING",
    "parameters" : {
      "servicename" : "Print Spooler",
      "failcount" : "2",
      "startpendingok" : "0",
      "restart" : "0",
      "consecutiverestartcount" : "2",
      "cumulativerestartcount" : "4|24",
      "servicekeyname" : "Spooler",
      "description" : "Windows Service Check - Print Spooler",
      "descriptorid" : 1013
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-04T00:25:45+01:00",
    "updated_at" : "2015-06-16T21:32:27.521+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 2,
    "consecutive_fails_count" : 0
  }, {
    "id" : "UK-618859",
    "type" : "SERVICE",
    "status" : "PASSING",
    "parameters" : {
      "servicename" : "Task Scheduler",
      "failcount" : "2",
      "startpendingok" : "0",
      "restart" : "0",
      "consecutiverestartcount" : "2",
      "cumulativerestartcount" : "4|24",
      "servicekeyname" : "Schedule",
      "description" : "Windows Service Check - Task Scheduler",
      "descriptorid" : 1013
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-04T00:25:45+01:00",
    "updated_at" : "2015-06-16T21:33:38.65+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 2,
    "consecutive_fails_count" : 0
  }, {
    "id" : "UK-618849",
    "type" : "PERFORMANCE_MONITORING_MEMORY",
    "status" : "SUPPRESSED",
    "parameters" : {
      "type" : "3",
      "instance" : "1.5",
      "threshold1" : "11",
      "threshold2" : "20",
      "threshold3" : "70",
      "threshold4" : "100",
      "description" : "Performance Monitoring Check - Memory",
      "descriptorid" : 1007
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-04T00:25:45+01:00",
    "updated_at" : "2015-06-16T21:30:59.892+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 0,
    "consecutive_fails_count" : 0
  }, {
    "id" : "UK-618850",
    "type" : "PERFORMANCE_MONITORING_DISK",
    "status" : "PASSING",
    "parameters" : {
      "type" : "5",
      "instance" : "_Total",
      "threshold1" : "3",
      "threshold2" : "2",
      "threshold3" : "50",
      "threshold4" : "",
      "description" : "Performance Monitoring Check - Disk - Total",
      "descriptorid" : 1007
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-04T00:25:45+01:00",
    "updated_at" : "2015-06-16T21:30:25.446+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 0,
    "consecutive_fails_count" : 0
  }, {
    "id" : "UK-618846",
    "type" : "DISK_SPACE",
    "status" : "PASSING",
    "parameters" : {
      "driveletter" : "C:\\",
      "freespace" : "32",
      "spaceunits" : "3",
      "description" : "Disk Space Check - drive C:",
      "descriptorid" : 1004
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 */5 * * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-04T00:25:45+01:00",
    "updated_at" : "2015-06-16T21:30:43.706+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "247" ],
    "clear_setting" : null,
    "enabled" : false,
    "allowed_consecutive_fails" : 0,
    "consecutive_fails_count" : 0
  }, {
    "id" : "dc79a97c-a780-4e5f-93dd-abeffee6f8c9",
    "type" : "DISK_SPACE_CHANGE",
    "status" : "PASSING",
    "parameters" : {
      "driveletter" : "C:\\",
      "threshold" : "26",
      "description" : "Drive Space Change Check - drive C:",
      "descriptorid" : 1003
    },
    "schedule" : {
      "type" : "INTERVAL",
      "cron_expression" : "0 0 6 * * *"
    },
    "device_id" : "1bfc1066abe21e9a987a3e6bb8844b5c",
    "created_at" : "2015-06-16T21:35:10.224+01:00",
    "updated_at" : "2015-06-16T21:35:10.224+01:00",
    "maintenance_settings" : [ ],
    "groups" : [ "DSC" ],
    "clear_setting" : null,
    "enabled" : true,
    "allowed_consecutive_fails" : 0,
    "consecutive_fails_count" : 0
  } ],
  "total" : 26
};
var oldData = [{
    "0": 618844,
    "arsenalcheckid": null,
    "clear": "checkhide",
    "status": "testok_inactive",
    "frequency": 2,
    "icon": "wsus",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Vulnerability Check",
    "firstline": "Awaiting first run",
    "datetime": "",
    "notes": 0,
    "descriptorid": 1025,
    "testconfigid": 746150,
    "association": 0,
    "editable": false,
    "removable": false,
    "multiplyEditable": false
}, {
    "0": 618864,
    "arsenalcheckid": "45f1a38f-69f2-4063-8a60-4a0abf4d8848",
    "clear": "checkoff",
    "status": "testerror_inactive",
    "frequency": 2,
    "icon": "av",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Antivirus Update Check - Windows Defender Antispyware",
    "firstline": "1.199.2618.0",
    "datetime": "16-Jun-2015 18:08",
    "notes": 0,
    "descriptorid": 1001,
    "testconfigid": 834866,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618863,
    "arsenalcheckid": "640f81d8-a96b-40cf-8913-3a4e1a90c524",
    "clear": "checkoff",
    "status": "testerror_inactive",
    "frequency": 2,
    "icon": "av",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Antivirus Update Check - Windows Defender Antivirus",
    "firstline": "1.199.2618.0",
    "datetime": "16-Jun-2015 18:08",
    "notes": 0,
    "descriptorid": 1001,
    "testconfigid": 834865,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618865,
    "arsenalcheckid": "dc79a97c-a780-4e5f-93dd-abeffee6f8c9",
    "clear": "checkhide",
    "status": "testok_inactive",
    "frequency": 2,
    "icon": "drivechange",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Drive Space Change Check - drive C:",
    "firstline": "Total: 119.66GB, Free: 67.25GB, Change: 1.00%",
    "datetime": "16-Jun-2015 18:08",
    "notes": 0,
    "descriptorid": 1003,
    "testconfigid": 834867,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618866,
    "arsenalcheckid": "c93fa021-c4fd-4dc4-ba75-1ab06bbe1ab4",
    "clear": "checkhide",
    "status": "testok_inactive",
    "frequency": 2,
    "icon": "failed_login_check",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Failed Login Check",
    "firstline": "0 Failed Logins",
    "datetime": "16-Jun-2015 18:08",
    "notes": 0,
    "descriptorid": 1006,
    "testconfigid": 834868,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618868,
    "arsenalcheckid": "2ebc6196-b27e-4fc2-a541-c11f262963ee",
    "clear": "checkhide",
    "status": "testok_inactive",
    "frequency": 2,
    "icon": "criticalevents",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Critical Events Check - Application log, 10 most recent",
    "firstline": "1 event(s) found",
    "datetime": "16-Jun-2015 18:08",
    "notes": 0,
    "descriptorid": 1014,
    "testconfigid": 834870,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618869,
    "arsenalcheckid": "4f05cf61-e5e0-4b3b-9133-00838ea75fb8",
    "clear": "checkhide",
    "status": "testok_inactive",
    "frequency": 2,
    "icon": "criticalevents",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Critical Events Check - Security log, 10 most recent",
    "firstline": "0 event(s) found",
    "datetime": "16-Jun-2015 18:08",
    "notes": 0,
    "descriptorid": 1014,
    "testconfigid": 834871,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618870,
    "arsenalcheckid": "82f7c6d0-f181-4d5a-ae0c-cbcfaf881599",
    "clear": "checkhide",
    "status": "testok_inactive",
    "frequency": 2,
    "icon": "criticalevents",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Critical Events Check - System log, 10 most recent",
    "firstline": "5 event(s) found",
    "datetime": "16-Jun-2015 18:08",
    "notes": 0,
    "descriptorid": 1014,
    "testconfigid": 834872,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618846,
    "arsenalcheckid": "UK-618846",
    "clear": "checkhide",
    "status": "testok",
    "frequency": 1,
    "icon": "dsk",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkon",
    "smsRecovery": "checkoff",
    "description": "Disk Space Check - drive C:",
    "firstline": "Total: 119.66GB, Free: 67.26GB",
    "datetime": "16-Jun-2015 22:09",
    "notes": 0,
    "descriptorid": 1004,
    "testconfigid": 834848,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618850,
    "arsenalcheckid": "UK-618850",
    "clear": "checkhide",
    "status": "testok",
    "frequency": 1,
    "icon": "performance",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkon",
    "smsRecovery": "checkoff",
    "description": "Performance Monitoring Check - Disk - Total",
    "firstline": "More information",
    "datetime": "16-Jun-2015 22:09",
    "notes": 0,
    "descriptorid": 1007,
    "testconfigid": 834852,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618849,
    "arsenalcheckid": "UK-618849",
    "clear": "checkhide",
    "status": "testalertdelayed",
    "frequency": 1,
    "icon": "performance",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkon",
    "smsRecovery": "checkoff",
    "description": "Performance Monitoring Check - Memory",
    "firstline": "More information",
    "datetime": "16-Jun-2015 22:09",
    "notes": 0,
    "descriptorid": 1007,
    "testconfigid": 834851,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618847,
    "arsenalcheckid": "UK-618847",
    "clear": "checkhide",
    "status": "testok",
    "frequency": 1,
    "icon": "performance",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkon",
    "smsRecovery": "checkoff",
    "description": "Performance Monitoring Check - Processor Queue",
    "firstline": "Average Queue: 0, Maximum Queue : 0",
    "datetime": "16-Jun-2015 22:09",
    "notes": 0,
    "descriptorid": 1007,
    "testconfigid": 834849,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618848,
    "arsenalcheckid": "UK-618848",
    "clear": "checkhide",
    "status": "testok",
    "frequency": 1,
    "icon": "performance",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkon",
    "smsRecovery": "checkoff",
    "description": "Performance Monitoring Check - Processor Time",
    "firstline": "6%, 6%, 6%, 7%",
    "datetime": "16-Jun-2015 22:09",
    "notes": 0,
    "descriptorid": 1007,
    "testconfigid": 834850,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618851,
    "arsenalcheckid": "UK-618851",
    "clear": "checkhide",
    "status": "testok",
    "frequency": 1,
    "icon": "svc",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Windows Service Check - DCOM Server Process Launcher",
    "firstline": "Status RUNNING",
    "datetime": "16-Jun-2015 22:09",
    "notes": 0,
    "descriptorid": 1013,
    "testconfigid": 834853,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618852,
    "arsenalcheckid": "UK-618852",
    "clear": "checkhide",
    "status": "testok",
    "frequency": 1,
    "icon": "svc",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Windows Service Check - DNS Client",
    "firstline": "Status RUNNING",
    "datetime": "16-Jun-2015 22:09",
    "notes": 0,
    "descriptorid": 1013,
    "testconfigid": 834854,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618854,
    "arsenalcheckid": "UK-618854",
    "clear": "checkhide",
    "status": "testok",
    "frequency": 1,
    "icon": "svc",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Windows Service Check - Group Policy Client",
    "firstline": "Status RUNNING",
    "datetime": "16-Jun-2015 22:09",
    "notes": 0,
    "descriptorid": 1013,
    "testconfigid": 834856,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618861,
    "arsenalcheckid": "UK-618861",
    "clear": "checkhide",
    "status": "testok",
    "frequency": 1,
    "icon": "svc",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Windows Service Check - Print Spooler",
    "firstline": "Status RUNNING",
    "datetime": "16-Jun-2015 22:09",
    "notes": 0,
    "descriptorid": 1013,
    "testconfigid": 834863,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618858,
    "arsenalcheckid": "UK-618858",
    "clear": "checkhide",
    "status": "testok",
    "frequency": 1,
    "icon": "svc",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Windows Service Check - Remote Procedure Call (RPC)",
    "firstline": "Status RUNNING",
    "datetime": "16-Jun-2015 22:09",
    "notes": 0,
    "descriptorid": 1013,
    "testconfigid": 834860,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618855,
    "arsenalcheckid": "UK-618855",
    "clear": "checkhide",
    "status": "testok",
    "frequency": 1,
    "icon": "svc",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Windows Service Check - Server",
    "firstline": "Status RUNNING",
    "datetime": "16-Jun-2015 22:09",
    "notes": 0,
    "descriptorid": 1013,
    "testconfigid": 834857,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618860,
    "arsenalcheckid": "UK-618860",
    "clear": "checkhide",
    "status": "testok",
    "frequency": 1,
    "icon": "svc",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Windows Service Check - System Event Notification Service",
    "firstline": "Status RUNNING",
    "datetime": "16-Jun-2015 22:09",
    "notes": 0,
    "descriptorid": 1013,
    "testconfigid": 834862,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618859,
    "arsenalcheckid": "UK-618859",
    "clear": "checkhide",
    "status": "testok",
    "frequency": 1,
    "icon": "svc",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Windows Service Check - Task Scheduler",
    "firstline": "Status RUNNING",
    "datetime": "16-Jun-2015 22:09",
    "notes": 0,
    "descriptorid": 1013,
    "testconfigid": 834861,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618857,
    "arsenalcheckid": "UK-618857",
    "clear": "checkhide",
    "status": "testok",
    "frequency": 1,
    "icon": "svc",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Windows Service Check - TCP\/IP NetBIOS Helper",
    "firstline": "Status RUNNING",
    "datetime": "16-Jun-2015 22:09",
    "notes": 0,
    "descriptorid": 1013,
    "testconfigid": 834859,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618853,
    "arsenalcheckid": "UK-618853",
    "clear": "checkhide",
    "status": "testok",
    "frequency": 1,
    "icon": "svc",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Windows Service Check - Windows Event Log",
    "firstline": "Status RUNNING",
    "datetime": "16-Jun-2015 22:09",
    "notes": 0,
    "descriptorid": 1013,
    "testconfigid": 834855,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618862,
    "arsenalcheckid": "UK-618862",
    "clear": "checkhide",
    "status": "testok",
    "frequency": 1,
    "icon": "svc",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Windows Service Check - Windows Management Instrumentation",
    "firstline": "Status RUNNING",
    "datetime": "16-Jun-2015 22:09",
    "notes": 0,
    "descriptorid": 1013,
    "testconfigid": 834864,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618856,
    "arsenalcheckid": "UK-618856",
    "clear": "checkhide",
    "status": "testok",
    "frequency": 1,
    "icon": "svc",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Windows Service Check - Workstation",
    "firstline": "Status RUNNING",
    "datetime": "16-Jun-2015 22:09",
    "notes": 0,
    "descriptorid": 1013,
    "testconfigid": 834858,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}, {
    "0": 618867,
    "arsenalcheckid": null,
    "clear": "checkhide",
    "status": "testok",
    "frequency": 2,
    "icon": "physdsk",
    "email": "checkon",
    "sms": "checkoff",
    "emailRecovery": "checkoff",
    "smsRecovery": "checkoff",
    "description": "Physical Disk Health Check",
    "firstline": "Disk(s) reporting OK",
    "datetime": "16-Jun-2015 18:08",
    "notes": 0,
    "descriptorid": 1008,
    "testconfigid": 834869,
    "association": 0,
    "editable": true,
    "removable": true,
    "multiplyEditable": true
}];

describe("Combiner", function() {
  var combiner;

  beforeEach(function() {
    combiner = new Combiner();
  });

  it("should combine new and old", function() {
    combiner.combine(newData, oldData);
  });

  describe("when song has been paused", function() {
    // beforeEach(function() {
    //   player.play(song);
    //   player.pause();
    // });

    // it("should indicate that the song is currently paused", function() {
    //   expect(player.isPlaying).toBeFalsy();

    //   // demonstrates use of 'not' with a custom matcher
    //   expect(player).not.toBePlaying(song);
    // });

    // it("should be possible to resume", function() {
    //   player.resume();
    //   expect(player.isPlaying).toBeTruthy();
    //   expect(player.currentlyPlayingSong).toEqual(song);
    // });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function() {
    // spyOn(song, 'persistFavoriteStatus');

    // player.play(song);
    // player.makeFavorite();

    // expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function() {
    // it("should throw an exception if song is already playing", function() {
    //   player.play(song);

    //   expect(function() {
    //     player.resume();
    //   }).toThrowError("song is already playing");
    // });
  });
});
