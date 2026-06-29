const HomeBtn = document.getElementById("HomeBtn");
const AboutBtn = document.getElementById("AboutBtn");
const SkillsBtn = document.getElementById("SkillsBtn");
const ProjectsBtn = document.getElementById("ProjectsBtn");
const ContactBtn = document.getElementById("ContactBtn");

HomeBtn.addEventListener("click", function () {
    window.location.href = "index.html";
});

AboutBtn.addEventListener("click", function () {
    window.location.href = "About.html";
});

SkillsBtn.addEventListener("click", function () {
    window.location.href = "Skills.html";
});

ProjectsBtn.addEventListener("click", function () {
    window.location.href = "Projects.html";
});

ContactBtn.addEventListener("click", function () {
    window.location.href = "Contacts.html";
});

const EducationPopup = document.getElementById("EducationPopup");
const ClosePopupEdu = document.getElementById("ClosePopupEdu");
const popupEdu = document.getElementById("popupEdu");

if (EducationPopup) {
    EducationPopup.addEventListener("click", function () {
        popupEdu.style.display = "flex";
    });
}

if (ClosePopupEdu) {
    ClosePopupEdu.addEventListener("click", function () {
        popupEdu.style.display = "none";
    });
}

const InterestsPopup = document.getElementById("InterestsPopup");
const ClosePopupInt = document.getElementById("ClosePopupInt");
const popupInt = document.getElementById("popupInt");

if (InterestsPopup) {
    InterestsPopup.addEventListener("click", function () {
        popupInt.style.display = "flex";
    });
}

if (ClosePopupInt) {
    ClosePopupInt.addEventListener("click", function () {
        popupInt.style.display = "none";
    });
}

const SkillsPopup = document.getElementById("SkillsPopup");
const ClosePopupSki = document.getElementById("ClosePopupSki");
const popupSki = document.getElementById("popupSki");

if (SkillsPopup) {
    SkillsPopup.addEventListener("click", function () {
        popupSki.style.display = "flex";
    });
}

if (ClosePopupSki) {
    ClosePopupSki.addEventListener("click", function () {
        popupSki.style.display = "none";
    });
}

const DarkMode = document.getElementById("DarkMode");

DarkMode.addEventListener("click", function () {
    document.body.classList.toggle("darkmode");
});
