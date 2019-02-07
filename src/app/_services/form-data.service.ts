import {Injectable} from '@angular/core';
import {FormData, PersonalDetails, BankDetails, EmploymentDetails, LoanParticlars} from '../_models/formData.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData: FormData = new FormData();
  private isPersonalFormValid: boolean;
  private isBankFormValid: boolean;
  private isEmploymentDetailsFormValid: boolean;
  private isLoanParticlarsFormValid: boolean;

  constructor() {
  }

  getPersonal(): PersonalDetails {
    const personal: PersonalDetails = {
      membershipNumber: this.formData.membershipNumber,
      firstName: this.formData.firstName,
      middleName: this.formData.middleName,
      lastName: this.formData.lastName,
      idNumber: this.formData.idNumber,
      dob: this.formData.dob,
      homeAddress: this.formData.homeAddress,
      officeTelNumber: this.formData.officeTelNumber,
      pinNumber: this.formData.pinNumber,
      mobileNumber: this.formData.mobileNumber,
      email: this.formData.email,
      physicalAddress: this.formData.physicalAddress,
      maritalStatus: this.formData.maritalStatus,
      dependants: this.formData.dependants
    };
    return personal;
  }

  setPersonal(data: PersonalDetails) {
    this.isPersonalFormValid = true;
    this.formData.membershipNumber = data.membershipNumber;
    this.formData.firstName = data.firstName;
    this.formData.middleName = data.middleName;
    this.formData.lastName = data.lastName;
    this.formData.idNumber = data.idNumber;
    this.formData.dob = data.dob;
    this.formData.homeAddress = data.homeAddress;
    this.formData.officeTelNumber = data.officeTelNumber;
    this.formData.pinNumber = data.pinNumber;
    this.formData.mobileNumber = data.mobileNumber;
    this.formData.email = data.email;
    this.formData.physicalAddress = data.physicalAddress;
    this.formData.maritalStatus = data.maritalStatus;
    this.formData.dependants = data.dependants;
  }


  getEmploymentDetails(): EmploymentDetails {
    const employmentDetails: EmploymentDetails = {
      employmentEmployer: this.formData.employmentEmployer,
      employmentPhysicalAddress: this.formData.employmentPhysicalAddress,
      employmentPostalAddress: this.formData.employmentPostalAddress,
      employmentTel: this.formData.employmentTel,
      employmentDesignation: this.formData.employmentDesignation,
      employmentStaffNumber: this.formData.employmentStaffNumber,
      employmentTerms: this.formData.employmentTerms,
      employmentBusinessType: this.formData.employmentBusinessType,
      employmentBusinessYearsOfOperation: this.formData.employmentBusinessYearsOfOperation,
      employmentBusinessIncome: this.formData.employmentBusinessIncome
    };
    return employmentDetails;
  }

  setEmploymentDetails(data: EmploymentDetails) {
    this.isEmploymentDetailsFormValid = true;
    this.formData.employmentEmployer = data.employmentEmployer;
    this.formData.employmentPhysicalAddress = data.employmentPhysicalAddress;
    this.formData.employmentPostalAddress = data.employmentPostalAddress;
    this.formData.employmentTel = data.employmentTel;
    this.formData.employmentDesignation = data.employmentDesignation;
    this.formData.employmentStaffNumber = data.employmentStaffNumber;
    this.formData.employmentTerms = data.employmentTerms;
    this.formData.employmentBusinessType = data.employmentBusinessType;
    this.formData.employmentBusinessYearsOfOperation = data.employmentBusinessYearsOfOperation;
    this.formData.employmentBusinessIncome = data.employmentBusinessIncome;
  }

  getBankDetails(): BankDetails {
    const bakDetails: BankDetails = {
      bankAccountName: this.formData.bankAccountName,
      bankAccountNumber: this.formData.bankAccountNumber,
      bank: this.formData.bank,
      bankCode: this.formData.bankCode,
      bankBranch: this.formData.bankBranch,
      bankBranchCode: this.formData.bankBranchCode
    };
    return bakDetails;
  }

  setBankDetails(data: BankDetails) {
    this.isBankFormValid = true;
    this.formData.bankAccountName = data.bankAccountName;
    this.formData.bankAccountName = data.bankAccountNumber;
    this.formData.bankAccountName = data.bank;
    this.formData.bankAccountName = data.bankCode;
    this.formData.bankAccountName = data.bankBranch;
    this.formData.bankAccountName = data.bankBranchCode;
  }

  getLoanParticulars(): LoanParticlars {
    const loanParticlars: LoanParticlars = {
      loanType: this.formData.loanType,
      loanPurpose: this.formData.loanPurpose,
      loanAmount: this.formData.loanAmount
    };
    return loanParticlars;
  }

  setLoanParticulars(data: LoanParticlars) {
    this.isLoanParticlarsFormValid = true;
    this.formData.loanType = data.loanType;
    this.formData.loanPurpose = data.loanPurpose;
    this.formData.loanType = data.loanAmount;
  }

  getLoanInOtherBanks() {
    return false;
  }


  getFormData() {
    return this.formData;
  }

  resetFormData(): FormData {
    this.formData.clear();
    this.isPersonalFormValid = this.isBankFormValid = this.isEmploymentDetailsFormValid = this.isLoanParticlarsFormValid = false;
    return this.formData;
  }

  isFormValid() {
    return this.isPersonalFormValid &&
      this.isBankFormValid &&
      this.isEmploymentDetailsFormValid && this.isLoanParticlarsFormValid;
  }

}
