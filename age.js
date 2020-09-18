var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter your age"));
     floatDays = parseFloat(floatAge * 365.25).toFixed(2);
     intWeeks = parseInt(floatDays/7).toFixed(2);
     floatMonths = parseFloat(floatAge * 12).toFixed(2);
     intFortnights = parseInt(floatDays/14).toFixed(2);
     alert("Days old= " + floatDays);
     alert("Weeks old= " + intWeeks);
     alert("Months old= " + floatMonths);
     alert("Fortnights old= " + intFortnights);
//This will calculate user's age in various forms
