# ============================
# CLINIANI AI Frontend Structure
# ============================

$folders = @(
"src/api",
"src/assets",
"src/components",
"src/components/common",
"src/components/layout",
"src/components/patient",
"src/context",
"src/hooks",
"src/layouts",
"src/pages",
"src/pages/Login",
"src/pages/Dashboard",
"src/pages/Patient",
"src/routes",
"src/services",
"src/styles",
"src/utils"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

$files = @(
"src/api/axios.js",

"src/components/common/Button.jsx",
"src/components/common/Input.jsx",

"src/components/layout/Header.jsx",
"src/components/layout/Sidebar.jsx",
"src/components/layout/Layout.jsx",

"src/context/AuthContext.jsx",

"src/hooks/useAuth.js",

"src/pages/Login/Login.jsx",
"src/pages/Dashboard/Dashboard.jsx",

"src/pages/Patient/PatientList.jsx",
"src/pages/Patient/AddPatient.jsx",
"src/pages/Patient/EditPatient.jsx",
"src/pages/Patient/PatientSummary.jsx",

"src/routes/AppRoutes.jsx",

"src/services/authService.js",
"src/services/patientService.js",

"src/styles/global.css",

"src/utils/constants.js"
)

foreach ($file in $files) {
    if (!(Test-Path $file)) {
        New-Item -ItemType File -Path $file | Out-Null
    }
}

Write-Host ""
Write-Host "========================================="
Write-Host " CLINIANI AI Frontend Structure Created"
Write-Host "========================================="