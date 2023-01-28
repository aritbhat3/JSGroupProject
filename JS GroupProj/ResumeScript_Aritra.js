let resumedata = {
    fetchData: function (index) {
        fetch('./Data.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => this.displayResume(data.resume[index]))
    },

    displayResume: function (data) {
        document.querySelector(".ProfileNumber").innerHTML =  data.id;
        document.querySelector(".ApplicantName").innerHTML = data.basics.name;
        document.querySelector(".AppliedForPosition").innerHTML = "Applied For: "+ data.basics.AppliedFor;
        document.querySelector(".ApplicantPhoneNumber").innerHTML = data.basics.phone;
        document.querySelector(".ApplicantEmail").innerHTML = data.basics.email;
        document.querySelector(".ApplicantLinkedIn").innerHTML = data.basics.profiles.url;
        
        document.querySelector(".TechnicalSkillsList").innerHTML = null;
        for(keyword in data.skills.keywords) {
            document.querySelector(".TechnicalSkillsList").innerHTML += data.skills.keywords[keyword]+"<br>";
        }

        document.querySelector(".HobbiesList").innerHTML = null;
        for(hobby in data.skills.keywords) {
            document.querySelector(".HobbiesList").innerHTML += data.interests.hobbies[hobby]+"<br>";
        }

        document.querySelector(".PreviousCompanyName").innerHTML = "Company Name: "+data.work["Company Name"];
        document.querySelector(".PreviousPosition").innerHTML = "Position: "+data.work.Position;
        document.querySelector(".StartDate").innerHTML = "Start Date: "+data.work["Start Date"];
        document.querySelector(".EndDate").innerHTML = "End Date: "+data.work["End Date"];
        document.querySelector(".WorkSummary").innerHTML = "Summary: "+data.work["Summary"];
        document.querySelector(".ProjectDetails").innerHTML = data.projects.name+": "+data.projects.description;
        
        document.querySelector(".EducationDetails").innerHTML = null;
        document.querySelector(".EducationDetails").innerHTML = 
        ">UG: "+data.education.UG.institute+", "+data.education.UG.course+", "+data.education.UG["Start Date"]+", "+data.education.UG["End Date"]+", "+data.education.UG.cgpa+"<br>"+
        ">PU: "+data.education["Senior Secondary"].institute+", "+data.education["Senior Secondary"].cgpa+"<br>"+
        ">High School: "+data.education["High School"].institute+", "+data.education["High School"].cgpa;

        document.querySelector(".InternshipCompany").innerHTML = "Company Name: "+data.Internship["Company Name"];
        document.querySelector(".InternshipPosition").innerHTML = "Position: "+data.Internship["Position"];
        document.querySelector(".InternshipStart").innerHTML = "Start Date: "+data.Internship["Start Date"];
        document.querySelector(".InternshipEnd").innerHTML = "End Date: "+data.Internship["End Date"];
        document.querySelector(".InternshipSummary").innerHTML = "Summary: "+data.Internship["Summary"];


        document.querySelector(".ApplicantAchievement").innerHTML = null;
        for (achievement in data.achievements.Summary) {
        document.querySelector(".ApplicantAchievement").innerHTML += ">"+data.achievements.Summary[achievement]+"<br>";
        }
    }
}


document.querySelector(".Next").addEventListener("click", function () {    
    if (document.querySelector(".ProfileNumber").innerHTML!="") {
        resumedata.fetchData(parseInt(document.querySelector(".ProfileNumber").innerHTML));
    } else {
        resumedata.fetchData(0);
    }
});

document.querySelector(".Previous").addEventListener("click", function () {    
    if (document.querySelector(".ProfileNumber").innerHTML=="" || parseInt(document.querySelector(".ProfileNumber").innerHTML)==1) {
        resumedata.fetchData(0);
    } else {
        resumedata.fetchData(parseInt(document.querySelector(".ProfileNumber").innerHTML)-2);
    }
});

resumedata.fetchData(0);