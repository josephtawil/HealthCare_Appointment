import React, { useState } from 'react';
import "./form.css"
import axios from 'axios';

const answersSubmitted = [];

export default function Form() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
    const [total, setTotal] = useState([]);
    // const [zipcode, setZipcode] = useState("");
    // const [dateOfBirth, setDateOfBirth] = useState("");
    const [form, setForm] = useState( {name: "",zipcode:"", dateOfBirth: ""});
	const questions = [
		{

			questionText: 'Enter your full name',
			answerOptions: [
				{ answerText: 'Name', isCorrect: true },
				
			],
            placeholder: 'First & Last Name',
            answerSubmitted: form.name
		},
		{
			questionText: 'Enter Address',
			answerOptions: [
				{ answerText: 'Zipcode', isCorrect: true },
				
			],
            placeholder: 'Enter Address',
            answerSubmitted: form.zipcode
		},
		{
			questionText: 'Enter Insurance Number',
			answerOptions: [
				{ answerText: 'InsuranceNumber', isCorrect: true },
				
			],
            placeholder: 'InsuranceId',
            answerSubmitted: form.dateOfBirth
		},
        {
			questionText: 'Enter Last 4 Digits of SSN',
			answerOptions: [
				{ answerText: 'SSN', isCorrect: true },
				
			],
            placeholder: 'Last Four Digits of SSN',
            answerSubmitted: form.dateOfBirth
		},
		// {
		// 	questionText: 'Type of Immunization',
		// 	answerOptions: [
		// 		{ answerText: 'COVID-19', isCorrect: true },
		// 		{ answerText: 'Flu', isCorrect: true },
		// 		{ answerText: 'Senior Flu(65+)', isCorrect: true },
		// 		{ answerText: 'Pneumococcal Vaccine', isCorrect: true },
        //         { answerText: 'Shingles', isCorrect: true },		

		// 	],
		// },
	];

    const postAppointment = () => {
        const store_id = 5;
        const insurance_id = answersSubmitted[2]
        const store_address = answersSubmitted[1]
        const customerr_name = answersSubmitted[0];
        const ssn_last_four = answersSubmitted[3];

        fetch("https://f228a924-22b6-463b-af4d-0a3ece480bfe-westus2.apps.astra.datastax.com/api/rest/v2/keyspaces/pharmacy/appointments", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              "x-cassandra-token": "AstraCS:XzxpBpaZGsQSOudbyvEsPIKF:9b4355f30fe86c9d1e1f66ac09e595426c35685468be581ed7c24ed6c32af2e4",
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "store_id": store_id,
              "insurance_id": insurance_id,
              "store_address": store_address,
              "customerr_name": customerr_name,
              "ssn_last_four": ssn_last_four
            }),
          }).then((res)=>{
              console.log(res)
          })

        
    }


	const handleAnswerOptionClick = (answerOption) => {
		if (answerOption.isCorrect) {
			setScore(score + 1);
            console.log(answerOption.answerText);
		}

        

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					{/* You scored {score} out of {questions.length} */}
                    <button onClick={postAppointment}>Submit for Appointment</button>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
           
						{questions[currentQuestion].answerOptions.map((answerOption) => {
                            console.log( questions[currentQuestion].answerOptions.length)
                        
                                return(
                                    <>
                                             <input
          type="text"
          value={ questions[currentQuestion].answerSubmitted}
          placeholder={questions[currentQuestion].placeholder}
          onChange={e =>{
              setForm({[e.target.name] : e.target.value})
              
          }
            }
        />
							<button onClick={() =>{ 
                                handleAnswerOptionClick(answerOption)
                                console.log(answerOption)
                                console.log(form)
                                answersSubmitted.push(form[""])
                                console.log(answersSubmitted[0])
        
                            }
                            }>Next Question</button>
                            
                            </>
                            
                                )
                            
                        })}
					</div>
				</>
			)}
		</div>
	);
}