import Mock from 'mockjs';
import login from './modules/login';
import header from './modules/header';
import home from './modules/home';
import bedStatus from './modules/bedStatus';
import careTeam from './modules/careTeam';
import critical from './modules/critical';
import procedure from './modules/procedure';
import blood from './modules/blood';
import call from './modules/call';
import catheter from './modules/catheter';
import mealOrder from './modules/mealOrder';
import badge from './modules/badge';
import directory from './modules/directory';
import alert from './modules/alert';
import notification from './modules/notification';

// Helper function to register mock endpoints using regex pattern matching
function registerMock(pathEnv, fallbackPath, method, handler) {
  const pathsToRegister = new Set();
  if (pathEnv) {
    let cleanPath = String(pathEnv).replace(/^https?:\/\/[^\/]+/, '');
    pathsToRegister.add(cleanPath);
  }
  if (fallbackPath) {
    let cleanFallback = String(fallbackPath).replace(/^https?:\/\/[^\/]+/, '');
    pathsToRegister.add(cleanFallback);
  }
  
  for (let path of pathsToRegister) {
    if (!path) continue;
    const escaped = path.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const pattern = new RegExp(escaped + '$', 'i');
    
    Mock.mock(pattern, method, (options) => {
      console.log(`[MockJS Intercepted] ${options.type.toUpperCase()} ${options.url}`);
      if (typeof handler === 'function') {
        return handler(options);
      }
      return handler;
    });
  }
}

// Response delay simulation (100-300ms)
Mock.setup({
  timeout: '100-300'
});

// 1. Login & Auth
registerMock(import.meta.env.VITE_API_PATH_LOGIN_VERIFYDEVICE, '/api/webapp/Login/VerifyDevice', 'post', login.VerifyDevice);
registerMock(import.meta.env.VITE_API_PATH_LOGIN_VALIDATION, '/api/webapp/Login/Validation', 'post', login.Validation);
registerMock(import.meta.env.VITE_API_PATH_LOGOUT, '/api/webapp/Login/Logout', 'post', login.Logout);

// 2. Top Header & Navigation
registerMock(import.meta.env.VITE_API_PATH_HEADER, '/api/webapp/Header/InformationData', 'post', header.GetHeaderData);

// 3. Home Information
registerMock(import.meta.env.VITE_API_PATH_HOME_INFORMATIONDATA, '/api/webapp/Home/InformationData', 'post', home.GetHomeData);

// 4. Bed Status
registerMock(import.meta.env.VITE_API_PATH_BEDSTATUS_INFORMATIONDATA, '/api/webapp/BedStatus/InformationData', 'post', bedStatus.GetBedStatusData);
registerMock(import.meta.env.VITE_API_PATH_BEDSTATUS_GETDISCHARGE, '/api/webapp/BedStatus/GetDischarge', 'post', bedStatus.GetDischargeData);
registerMock(import.meta.env.VITE_API_PATH_BEDSTATUS_ADMISSION, '/api/webapp/BedStatus/Admission', 'post', bedStatus.GetAdmissionData);

// 5. Care Team (Nurse & Doctor)
registerMock(import.meta.env.VITE_API_PATH_CARETEAM_INCHARGENURSE, '/api/webapp/CareTeam/InChargeNurse', 'post', careTeam.GetNurseData);
registerMock(import.meta.env.VITE_API_PATH_CARETEAM_DOCTOR, '/api/webapp/CareTeam/Doctor', 'post', careTeam.GetDoctorData);

// 6. Critical Lab Reports
registerMock(import.meta.env.VITE_API_PATH_CRITICAL, '/api/webapp/Critical/Report', 'post', critical.GetCriticalData);
registerMock(import.meta.env.VITE_API_PATH_CRITICALLABREPORT_DIALOGCLOSE, '/api/webapp/Critical/DialogClose', 'post', critical.CloseDialog);

// 7. Procedure / OT
registerMock(import.meta.env.VITE_API_PATH_PROCEDURE, '/api/webapp/Procedure/List', 'post', procedure.GetProcedureData);

// 8. Blood Transfusion & IVD Infusion
registerMock(import.meta.env.VITE_API_PATH_BLOOD, '/api/webapp/Blood/Transfusion', 'post', blood.GetBloodData);

// 9. On-Call Doctors & Contacts
registerMock(import.meta.env.VITE_API_PATH_CALL_CONSULTANT, '/api/webapp/Call/Consultant', 'post', call.GetConsultantData);
registerMock(import.meta.env.VITE_API_PATH_CALL_OTHER, '/api/webapp/Call/Other', 'post', call.GetOtherData);
registerMock(import.meta.env.VITE_API_PATH_CALL_CONTACT, '/api/webapp/Call/Contact', 'post', call.GetContactData);

// 10. Catheter & IV Site
registerMock(import.meta.env.VITE_API_PATH_CATHETER, '/api/webapp/Catheter/List', 'post', catheter.GetCatheterData);

// 11. Meal Ordering
registerMock(import.meta.env.VITE_API_PATH_MealOrdering, '/api/webapp/MealOrdering/List', 'post', mealOrder.GetMealOrderingData);
registerMock(import.meta.env.VITE_API_PATH_MealOrdering_Deadline, '/api/webapp/MealOrdering/Deadline', 'post', mealOrder.GetMealOrderingDeadline);

// 12. Badges
registerMock(import.meta.env.VITE_API_PATH_BADGE, '/api/webapp/Badge/List', 'post', badge.GetBadgeData);

// 13. Directory
registerMock(import.meta.env.VITE_API_PATH_DIRECTORY, '/api/webapp/Directory/GetFile', 'post', directory.GetDirectoryData);

// 14. Alert
registerMock(import.meta.env.VITE_API_PATH_ALERT, '/api/webapp/Alert/List', 'post', alert.GetAlertData);

// 15. Side Notification
registerMock(import.meta.env.VITE_API_PATH_SideNotification, '/api/webapp/SideNotification/List', 'post', notification.GetNotificationData);

console.log('[MockJS] SmartWard Mock API initialized with fallback route matching.');