export class FormData {
  membershipNumber: string;
  firstName: string;
  middleName: string;
  lastName: string;
  idNumber: string;
  dob: string;
  homeAddress: string;
  officeTelNumber: string;
  pinNumber: string;
  mobileNumber: string;
  email: string;
  physicalAddress: object;
  maritalStatus: string;
  dependants: number;
  employmentEmployer: string;
  employmentPhysicalAddress: string;
  employmentPostalAddress: string;
  employmentTel: string;
  employmentDesignation: string;
  employmentStaffNumber: string;
  employmentTerms: string;
  employmentBusinessType: string;
  employmentBusinessYearsOfOperation: string;
  employmentBusinessIncome: string;
  bankAccountName: string;
  bankAccountNumber: string;
  bank: string;
  bankCode: string;
  bankBranch: string;
  bankBranchCode: string;
  loanType: string;
  loanPurpose: string;
  loanAmount: string;

  clear() {
    this.membershipNumber = '';
    this.firstName = '';
    this.middleName = '';
    this.lastName = '';
    this.idNumber = '';
    this.dob = '';
    this.email = '';
    this.homeAddress = '';
    this.officeTelNumber = '';
    this.pinNumber = '';
    this.mobileNumber = '';
    this.physicalAddress = {};
    this.maritalStatus = '';
    this.dependants = 0;
    this.employmentEmployer = '';
    this.employmentPhysicalAddress = '';
    this.employmentPostalAddress = '';
    this.employmentTel = '';
    this.employmentDesignation = '';
    this.employmentStaffNumber = '';
    this.employmentTerms = '';
    this.employmentBusinessType = '';
    this.employmentBusinessYearsOfOperation = '';
    this.employmentBusinessIncome = '';
    this.bankAccountName = '';
    this.bankAccountNumber = '';
    this.bank = '';
    this.bankCode = '';
    this.bankBranch = '';
    this.bankBranchCode = '';
    this.loanType = '';
    this.loanPurpose = '';
    this.loanAmount = '';
  }
}

export class PersonalDetails {
  membershipNumber: string;
  firstName: string;
  middleName: string;
  lastName: string;
  idNumber: string;
  dob: string;
  homeAddress: string;
  officeTelNumber: string;
  pinNumber: string;
  mobileNumber: string;
  email: string;
  physicalAddress: object;
  maritalStatus: string;
  dependants: number;
}

export class EmploymentDetails {
  employmentEmployer: string;
  employmentPhysicalAddress: string;
  employmentPostalAddress: string;
  employmentTel: string;
  employmentDesignation: string;
  employmentStaffNumber: string;
  employmentTerms: string;
  employmentBusinessType: string;
  employmentBusinessYearsOfOperation: string;
  employmentBusinessIncome: string;
}

export class BankDetails {
  bankAccountName: string;
  bankAccountNumber: string;
  bank: string;
  bankCode: string;
  bankBranch: string;
  bankBranchCode: string;
}
export class LoanParticlars {
  loanType: string;
  loanPurpose: string;
  loanAmount: string;
}

