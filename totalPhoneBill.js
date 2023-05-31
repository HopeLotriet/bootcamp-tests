function totalPhoneBill(phoneBill){
    var total = 0;
    const callAndSms = phoneBill.split(",");
    for ( var i=0; i<callAndSms.length; i++){
      let callOrSms = callAndSms[i].trim();
      if (callOrSms === "call"){
        total = total + 2.75;
          }
      else {
        total = total + 0.65;
  }
    }
    return "R" + total.toFixed(2);
  }
    console.log(totalPhoneBill('call, sms, call, sms, sms'));
    
  assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
  assert.equal('R3.40', totalPhoneBill('call, sms'));
  assert.equal('R1.30', totalPhoneBill('sms, sms'));