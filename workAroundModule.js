// Add your imports here.
import {getDataByRole, getDataByCompany} from './salaryData';
import salaryData from './salaryData';

// Replace the empty array with the appropriate imported function/value
const getAverageSalaryByRole = (role) => {
    const roleData = [getDataByRole];
    const salariesOfRole = roleData.map((obj) => obj.salary);
    return calculateAverage(salariesOfRole);
};

export {getAverageSalaryByRole};
  
// Replace the empty array with the appropriate imported function/value
const getAverageSalaryByCompany = (company) => {
    const companyData = [getDataByCompany];
    const salariesAtCompany = companyData.map((obj) => obj.salary);
    return calculateAverage(salariesAtCompany);
};

export {getAverageSalaryByCompany};
  
// Replace the empty array with the appropriate imported function/value
const getSalaryAtCompany = (role, company) => {
    const companyData = [getDataByCompany];
    const roleAtCompany = companyData.find((obj) => obj.role === role);
    return roleAtCompany.salary;
};

export {getSalaryAtCompany};
  
// Replace the empty array with the appropriate imported function/value
const getIndustryAverageSalary = () => {
    const allSalaries = [salaryData].map((obj) => obj.salary);
    return calculateAverage(allSalaries);
};

export {getIndustryAverageSalary};
  
// Helper Function. Do not edit.
// Note: This function does not need to be exported since it is only used by the functions contained within this module.
function calculateAverage(arrayOfNumbers) {
    let total = 0;
    arrayOfNumbers.forEach((number) => (total += number));
    return (total / arrayOfNumbers.length).toFixed(2);
}