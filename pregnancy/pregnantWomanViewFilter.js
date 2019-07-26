import {
    StatusBuilderAnnotationFactory, 
    RuleFactory,  
    FormElementsStatusHelper,
    WithName,
    FormElementStatus
} from 'rules-config/rules';
import lib from '../lib';

const statusBuilder = StatusBuilderAnnotationFactory('programEnrolment', 'formElement');
const PregnantWomenViewFilter = RuleFactory("1d08e3e9-30a0-4fee-b1ce-55aeec627ea1", "ViewFilter");

@PregnantWomenViewFilter("12f9a59e-b0f9-4a1c-abe1-591c320cf199", "Pregnant Woman Enrolment", 100.0, {})
class PregnantWomenEnrolmentViewHandler {
    static exec(programEnrolment, formElementGroup) {
        return FormElementsStatusHelper
            .getFormElementsStatusesWithoutDefaults(new PregnantWomenEnrolmentViewHandler(), programEnrolment, formElementGroup);
    }    
    
    edd(programEnrolment, formElement) {
        const lmpDate = programEnrolment.getObservationValue('Last menstrual period');
        return _.isNil(lmpDate) ?
            new FormElementStatus(formElement.uuid, true) :
            new FormElementStatus(formElement.uuid, true, lib.calculations.estimatedDateOfDelivery(programEnrolment));
    }
   
    @WithName('Specify Other, pregnancy registered to where/whom')
    @statusBuilder
    a11([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Pregnancy registered to")
        .containsAnswerConceptName("Other");
    }  
 
    @WithName('Specify, Other reason of not having mamta card')
    @statusBuilder
    a12([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Reason for not having mamta card")
        .containsAnswerConceptName("Other");
    }  

    @WithName('Specify Other, who did investigation')
    @statusBuilder
    a13([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Investigation done by")
        .containsAnswerConceptName("Other");
    } 

    @WithName('Specify, Other place form where IFA tablets received')
    @statusBuilder
    a14([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("IFA tablets received from")
        .containsAnswerConceptName("Other");
    } 

    @WithName('Specify ,Other place you will do your delivery')
    @statusBuilder
    a15([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("At which place you will do your delivery")
        .containsAnswerConceptName("Other");
    } 

    @WithName('Specify, Other reasons to choose place of delivery')
    @statusBuilder
    a16([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Reasons to choose this place for delivery")
        .containsAnswerConceptName("Other");
    }

    @WithName('Specify,Other services you get on mamta divas')
    @statusBuilder
    a17([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Other services you get on mamta divas")
        .containsAnswerConceptName("Other");
    }

    @WithName('Specify, who other are available on mamta divas')
    @statusBuilder
    a18([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Who are available on mamta divas")
        .containsAnswerConceptName("Other");
    }
    
    @WithName('Specify,Other reason for not attending mamta divas')
    @statusBuilder
    a19([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Reason for not attending mamta divas")
        .containsAnswerConceptName("Other");
    }

    @WithName('Specify, Other snacks received')
    @statusBuilder
    a20([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("What do you get as a snacks")
        .containsAnswerConceptName("Other");
    }

    @WithName('Specify Other, who gave you information about government programme/scheme')
    @statusBuilder
    a21([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Information about government programme/scheme received from")
        .containsAnswerConceptName("Other");
    }

    @WithName('Specify Other reason for not getting benefits')
    @statusBuilder
    a22([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Reason for not getting benefits")
        .containsAnswerConceptName("Other");
    }
    

    @WithName('Specify Other types of complementary food that should be given to the child')
    @statusBuilder
    a23([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("What types of complementary food should be given to the child")
        .containsAnswerConceptName("Other");
    }

    @WithName('Specify Other source from where and by whom you got the information')
    @statusBuilder
    a24([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("From where and by whom you got the information")
        .containsAnswerConceptName("Other");
    }

    @WithName('Specify Other reason for not using any contraception method')
    @statusBuilder
    a25([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Why you did not use any contraception method")
        .containsAnswerConceptName("Other");
    }

    @WithName('In which month did you register pregnancy?')
    @statusBuilder
    a26([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Is pregnancy registered").is.yes;
    }

    @WithName('Where/Whom to registered your pregnancy?')
    @statusBuilder
    a27([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Is pregnancy registered").is.yes;
    }


    @WithName('Is mamta card updated with information about availed government services? (Please check Mamta card)')
    @statusBuilder
    a28([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Whether have mamta card").is.yes;
    }

    @WithName('Why you don’t have mamta card?')
    @statusBuilder
    a29([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Whether have mamta card").is.no;
    }

    @WithName('Number of live children you have')
    @statusBuilder
    a30([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Number of times got pregnant").is.greaterThan(1);
    }

    @WithName('Age of youngest child')
    @statusBuilder
    a31([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Number of times got pregnant").is.greaterThan(1);
    }

    @WithName('How many times you did checkup from doctor?')
    @statusBuilder
    a32([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Done checkup by doctor in current pregnancy").is.yes;
    }

    @WithName('Who did you get the investigation?')
    @statusBuilder
    a33([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Done checkup by doctor in current pregnancy").is.yes;
    }

    @WithName('Which are the services you availed in previous pregnancy?')
    @statusBuilder
    a44([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Number of times got pregnant").is.greaterThan(1)
        .and.when.valueInEnrolment("Done checkup by doctor in current pregnancy").is.no;
    }    

    @WithName('Number of IFA pills (every month)')
    @statusBuilder
    a54([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Received IFA tablets at every month").is.yes;
    }

    @WithName('From where did you get?')
    @statusBuilder
    a55([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Received IFA tablets at every month").is.yes;
    }

    @WithName('Do you consume IFA tablets? (check the strip of IFA tablet)')
    @statusBuilder
    a56([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Received IFA tablets at every month").is.yes;
    }

    @WithName('When do you consume IFA tablet?')
    @statusBuilder
    a57([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Consumed IFA tablets").is.yes;
    }

    @WithName('Why you did not consume IFA tablets?')
    @statusBuilder
    a58([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Consumed IFA tablets").is.no;
    }


    @WithName('Who took the decision')
    @statusBuilder
    a59([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Is decision taken for place of delivery").is.yes;
    }

    @WithName('At which place you will do your delivery')
    @statusBuilder
    a60([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Is decision taken for place of delivery").is.yes;
    }

    @WithName('Reasons to choose this place for delivery')
    @statusBuilder
    a61([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Is decision taken for place of delivery").is.yes;
    }

    @WithName('What are the services you get on mamta divas')
    @statusBuilder
    a62([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Do you get services of mamta divas").is.yes;
    }

     @WithName('Who are available on mamta divas')
    @statusBuilder
    a64([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Do you get services of mamta divas").is.yes;
    }

    @WithName('Why you do not attend mamta divas')
    @statusBuilder
    a65([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Do you get services of mamta divas").is.no;
    }

    @WithName('What do you get as a snacks?')
    @statusBuilder
    a67([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Do you get nutrition/snacks from anganwadi center")
        .is.yes;
    }

    @WithName('How many times do you get this snack/nutrition in the month')
    @statusBuilder
    a69([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Do you get nutrition/snacks from anganwadi center")
        .is.yes;
    }

    @WithName('Who gave you information about government programme/scheme?')
    @statusBuilder
    a70([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Benefits of government programme/scheme received")
        .is.yes;
    }

    @WithName('Under which government programme/scheme you got entitlements?')
    @statusBuilder
    a72([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Benefits of government programme/scheme received")
        .is.yes;
    }

    @WithName('Why you did not get benefits?')
    @statusBuilder
    a73([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Benefits of government programme/scheme received")
        .is.no;
    }

   
    @WithName('In which illness you cannot give mother’s milk to the child')
    @statusBuilder
    a74([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Can we give mother’s milk to child if mother is sick")
        .is.no;
    }

    @WithName('What did you use')
    @statusBuilder
    a75([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Did you use any method of contraception before pregnancy")
        .is.yes;
    }

    @WithName('From where and by whom you got the information')
    @statusBuilder
    a76([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Did you use any method of contraception before pregnancy")
        .is.yes;
    }

    @WithName('Why you did not use any contraception method')
    @statusBuilder
    a77([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Did you use any method of contraception before pregnancy")
        .is.no;
    }

    @WithName('What do you consume')
    @statusBuilder
    a78([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("Do you have any addiction").is.yes;
    }

    @WithName('How much quantity of Other snacks you get? (Check snacks)')
    @statusBuilder
    a79([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("What do you get as a snacks")
        .containsAnswerConceptName("Other");
    }

    @WithName('How much quantity of Oil you get? (Check snacks)')
    @statusBuilder
    a80([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("What do you get as a snacks")
        .containsAnswerConceptName("Oil");
    }

    @WithName('Specify other quantity of Oil received')
    @statusBuilder
    a81([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("How much quantity of Oil you get? (Check snacks)")
        .containsAnswerConceptName("Other");
    }

    @WithName('How much quantity of Wheat you get? (Check snacks)')
    @statusBuilder
    a82([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("What do you get as a snacks")
        .containsAnswerConceptName("Wheat (cereal)");
    }

    @WithName('Specify other quantity of Wheat received')
    @statusBuilder
    a83([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("How much quantity of Wheat you get? (Check snacks)")
        .containsAnswerConceptName("Other");
    }

    @WithName('How much quantity of Pulse you get? (Check snacks)')
    @statusBuilder
    a84([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("What do you get as a snacks")
        .containsAnswerConceptName("Pulses");
    }


    @WithName('Specify other quantity of Pulses received')
    @statusBuilder
    a85([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("How much quantity of Pulse you get? (Check snacks)")
        .containsAnswerConceptName("Other");
    }

    @WithName('How much quantity of Salt you get? (Check snacks)')
    @statusBuilder
    a86([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("What do you get as a snacks")
        .containsAnswerConceptName("Salt");
    }

    @WithName('Specify other quantity of Salt received')
    @statusBuilder
    a87([], statusBuilder) {
        statusBuilder.show().when.valueInEnrolment("How much quantity of Salt you get? (Check snacks)")
        .containsAnswerConceptName("Other");
    }




}

module.exports = {PregnantWomenEnrolmentViewHandler};