import React, { Component} from 'react';
import { setAccount, getAccount, removeAccount } from './helpers/account';

class Test extends Component {

    constructor(props){
       super(props);
  
       this.state = {
           fields: {},
           errors: {}
       }
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "This field must be filled in!";
        } 
  
        if(typeof fields["name"] !== "undefined"){

           if(!fields["name"].match(/^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ -]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters, accents and hyphens!";
           }        
        } 
   
        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "This field must be filled in!";
        }
  
        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid!";
            }
        } else {
            formIsValid = false;
            errors["email"] = "Must be a valid email!";
        }
        
        //Birth date
        if(!fields["birthdate"]){
            formIsValid = false;
            errors["birthdate"] = "This field must be filled in!";
        } else {
            var year = fields["birthdate"].split("-");
        }

        if(typeof fields["birthdate"] !== "undefined"){
            if(parseInt(year[0]) < "1900" || parseInt(year[0]) > "2016"){
                formIsValid = false;
                errors["birthdate"] = "Must be a valid birth date!";
            }
        } 

        //CPF
        if(!fields["CPF"]){
            formIsValid = false;
            errors["CPF"] = "This field must be filled in!"
        }

        let Sum;
        let Remainder;

        if(typeof fields["CPF"] !== "undefined"){

            if(fields["CPF"].match(/^[0-9.-]+$/)){
                var registrationNumber = fields["CPF"].split('.').join("");
                var strCPF = registrationNumber.split('-').join("");

                for (let i = 1; i <= 9; i++) Sum = Sum + parseInt(strCPF.substring(i-1, i)) * (11 - i);

                Remainder = (Sum * 10) % 11;

                if ((Remainder === 10) || (Remainder === 11)) Remainder = 0;
                if (Remainder !== parseInt(strCPF.substring(9, 10))) {
                    formIsValid = false;
                    errors["CPF"] = "Registration number not valid!";
                }

                Sum = 0;

                for (let i = 1; i <= 10; i++) Sum = Sum + parseInt(strCPF.substring(i-1, i)) * (12 - i);

                Remainder = (Sum * 10) % 11;

                if ((Remainder === 10) || (Remainder === 11)) Remainder = 0;
                if (Remainder !== parseInt(strCPF.substring(10, 11))) {
                    formIsValid = false;
                    errors["CPF"] = "Registration number not valid!";
                } else {
                    return true;
                }

            } else {
                formIsValid = false;
                errors["CPF"] = "Must be a valid registration number or CPF!";
            }
        } 

        // CEP
        if(!fields["postcode"]){
            formIsValid = false;
            errors["postcode"] = "This field must be filled in!";
        } 

        if(typeof fields["postcode"] !== "undefined") {

            if(fields["postcode"].length === 9) {

                if(fields["postcode"].match(/^[0-9-]+$/)) {

                    var zipcode = fields["postcode"].split("-").join("");

                } else {
                    formIsValid = false;
                    errors["postcode"] = "Must be a valid postcode!"
                }

            } else {
                formIsValid = false;
                errors["postcode"] = "Must be a valid postcode!";
            }

        }    

       this.setState({errors: errors});
       return formIsValid;
   }
 
   contactSubmit(e) {

        e.preventDefault();

        if (this.handleValidation()) {
            const formData = new FormData(e.target);
            const account = Object.fromEntries(formData);
            
            setAccount(account);

           alert("Form submitted!");
        } else {
           alert("Form has errors.")
        }

    }

    handleChange(field, e) {         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

    handleBlurCep(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
    
        const value = fields["postcode"]?.split("-").join("");
    
        if (value?.length !== 8) {
            return;
        }

        const storeData = (result) => {

            localStorage.setItem(fields["postcode"], JSON.stringify(result));

            for (let area in result) {
                if(document.querySelector("#" + area)) {
                    document.querySelector("#" + area).value = result[area];
                }
            }

        }

        const showData = (stored) => {

            for (let area in stored) {
                if(document.querySelector("#" + area)) {
                    document.querySelector("#" + area).value = stored[area];
                }
            }

        }

        const cachedData = localStorage.getItem(fields["postcode"]);

        if (cachedData) {
           showData(JSON.parse(cachedData));
        } else {
            fetch(`https://viacep.com.br/ws/${value}/json/`)
                .then(res => { 
                    if(!res.ok) throw new Error('Error');
                    return res.json()
                .then(data => storeData(data))
                })
                .catch(Error => console.log("Error:" + Error))
        }
    
    }

    render() {
        return (
            <div id="signup" >
                <div id="Healthy" className="container d-flex flex-horizontal pt-3">
                    <span id="Logo" className="container d-flex flex-horizontal justify-content mx-2">Healthy Food</span>
                </div>
                <div id="registertitle" ><h2 className="d-flex flex-horizontal">Register</h2></div>
                <form name="contactform" className="contactform d-flex flex-column" style={{width: 30 + 'rem'}} onSubmit={this.contactSubmit.bind(this)} >
                    <div>
                        <fieldset>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input id="fullname" type="text" className="form-control" name="fullname" placeholder="Enter your Full Name" autoComplete="name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"] || ''} required/>
                                <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input id="emailaddress" type="text" className="form-control" name="email" placeholder="Enter your Email" autoComplete="email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"] || ''} required/>
                                <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                            </div>
                            <div className="form-group">
                                <label>Birth date</label>
                                <input id="birthdate" type="date" className="form-control" name="birthdate" onChange={this.handleChange.bind(this, "birthdate")} value={this.state.fields["birthdate"] || ''} />
                                <span style={{color: "red"}}>{this.state.errors["birthdate"]}</span>
                            </div>
                            <div className="form-group">
                                <label>Registration Number</label>
                                <input id="cpf" type="text" className="form-control" name="regnumber" placeholder="Enter your Registration Number or CPF" onChange={this.handleChange.bind(this, "CPF")} value={this.state.fields["CPF"] || ''} />
                                <span style={{color: "red"}}>{this.state.errors["CPF"]}</span>
                            </div>
                            <div className="form-group">
                                <label>Postcode</label>
                                <input id="cep" type="text" className="form-control" name="postcode" placeholder="Enter your Postcode" onBlur={this.handleBlurCep.bind(this, "postcode")} onChange={this.handleChange.bind(this, "postcode")} defaultValue={this.state.fields["postcode"] || ''} required />
                                <span style={{color: "red"}}>{this.state.errors["postcode"]}</span>
                            </div>
                            <div className="form-group d-flex flex-horizontal mt-3">
                                <label id="labelcity">City</label>
                                <input id="localidade" type="text" className="form-control" name="city" placeholder="Enter your City" disabled={true} required />
                                <div id="divuf" className="d-flex flex-horizontal">
                                    <label className="mx-2">State</label>
                                    <input id="uf" type="text" className="form-control" name="state" style={{width: 5 + 'rem'}} placeholder="State" disabled={true} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <input id="logradouro" type="text" className="form-control" name="address" placeholder="Enter your Address" disabled={true} required />
                            </div>
                            <div>
                                <button id="submit" className="btn btn-round container mt-4 d-flex flex-horizontal justify-content-center">Submit</button>
                            </div>
                        </fieldset>
                    </div>
                </form>
            </div>
        );
    }
}

export default Test;