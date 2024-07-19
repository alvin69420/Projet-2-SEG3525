// import React from 'react';
// import Accordion from 'react-bootstrap/Accordion';
// import { Container } from 'react-bootstrap';

// const translationFAQ = {
//     en: {
//         faq: {
//           question1: 'What does Fitness Fusion do?',
//           answer1: 'Fitness Fusion is a fitness website that sells fitness equipment, offers exercise guides, articles to learn about the fitness world, and allows users to create their own personalized training plan.',
//           question2: 'Do I need to create an account?',
//           answer2: 'No, you do not need to create an account.',
//           question3: 'Are the exercise guides and articles suitable for beginners?',
//           answer3: 'Yes, the exercise guides and articles are suitable for beginners.',
//           question4: 'Where can I find the exercise guides and articles?',
//           answer4: 'You can find the exercise guides and articles in the navbar menu, in the respective menu sections.',
//           question5: 'What is the return policy for the equipment?',
//           answer5: 'The return policy is a 30-day return policy.',
//         }
//       },
//       es: {
//         faq: {
//           question1: '¿Qué hace Fitness Fusion?',
//           answer1: 'Fitness Fusion es un sitio web de fitness que vende equipos de fitness, ofrece guías de ejercicios, artículos para aprender sobre el mundo del fitness y permite a los usuarios crear su propio plan de entrenamiento personalizado.',
//           question2: '¿Necesito crear una cuenta?',
//           answer2: 'No, no necesitas crear una cuenta.',
//           question3: '¿Las guías de ejercicios y artículos son aptos para principiantes?',
//           answer3: 'Sí, las guías de ejercicios y artículos son aptos para principiantes.',
//           question4: '¿Dónde puedo encontrar las guías de ejercicios y artículos?',
//           answer4: 'Puedes encontrar las guías de ejercicios y artículos en el menú de la barra de navegación, en las secciones de menú respectivas.',
//           question5: '¿Cuál es la política de devoluciones para el equipo?',
//           answer5: 'La política de devoluciones es de 30 días.',
//         }
//       }
// };

// const FAQ = () => {
// return (
//     <Container className="mt-5">

//         <h2 className="text-center mt-5 display-2"><b>Frequently Asked Questions</b></h2>
        
//         <Accordion className='mt-5' alwaysOpen>
//             <Accordion.Item eventKey="0">
//                 <Accordion.Header>
//                     <h5><b>What does Fitness Fusion do?</b></h5>
//                 </Accordion.Header>
//                 <Accordion.Body className="AnswerText">
//                 Fitness Fusion is a fitness website that sells fitness equipment, offers exercise guides, articles to learn about the fitness world, and allows users to create their own personalized training plan.
//                 </Accordion.Body>  
//             </Accordion.Item>
//             <Accordion.Item eventKey="1">
//                 <Accordion.Header>
//                     <h5><b>Do I need to create an account?</b></h5>
//                 </Accordion.Header>
//                 <Accordion.Body className="AnswerText">
//                     No, you do not need to create an account.
//                 </Accordion.Body>
//             </Accordion.Item>
//             <Accordion.Item eventKey="2">
//                 <Accordion.Header>
//                     <h5><b>Are the exercise guides and articles suitable for beginners?</b></h5>
//                 </Accordion.Header>
//                 <Accordion.Body className="AnswerText">
//                     Yes, the exercise guides and articles are suitable for beginners.
//                 </Accordion.Body>
//             </Accordion.Item>
//             <Accordion.Item eventKey="3">
//                 <Accordion.Header>
//                     <h5><b>Where can I find the exercise guides and articles?</b></h5>
//                 </Accordion.Header>
//                 <Accordion.Body className="AnswerText">
//                     You can find the exercise guides and articles in the navbar menu, in the respective menu sections. 
//                 </Accordion.Body>
//             </Accordion.Item>
//             <Accordion.Item eventKey="4">
//                 <Accordion.Header>
//                     <h5><b>What is the return policy for the equipment?</b></h5>
//                 </Accordion.Header>
//                 <Accordion.Body className="AnswerText">
//                     There is a 30 day return policy. If you are not satisfied with the equipment, you can return it within 30 days of purchase.
//                 </Accordion.Body>
//             </Accordion.Item>
//             <Accordion.Item eventKey="6">
//                 <Accordion.Header>
//                     <h5><b>Is there a cost for creating a personalized training plan?</b></h5>
//                 </Accordion.Header>
//                 <Accordion.Body className="AnswerText">
//                     No, creating a personalized training plan is free of cost.
//                 </Accordion.Body>
//             </Accordion.Item>
//         </Accordion>
//     </Container>
// );
// };

// export default FAQ;

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';

const translationFAQ = {
    en: {
        faq: {
            question1: 'What does Fitness Fusion do?',
            answer1: 'Fitness Fusion is a fitness website that sells fitness equipment, offers exercise guides, articles to learn about the fitness world, and allows users to create their own personalized training plan.',
            question2: 'Do I need to create an account?',
            answer2: 'No, you do not need to create an account.',
            question3: 'Are the exercise guides and articles suitable for beginners?',
            answer3: 'Yes, the exercise guides and articles are suitable for beginners.',
            question4: 'Where can I find the exercise guides and articles?',
            answer4: 'You can find the exercise guides and articles in the navbar menu, in the respective menu sections.',
            question5: 'What is the return policy for the equipment?',
            answer5: 'The return policy is a 30-day return policy.',
        }
    },
    es: {
        faq: {
            question1: '¿Qué hace Fitness Fusion?',
            answer1: 'Fitness Fusion es un sitio web de fitness que vende equipos de fitness, ofrece guías de ejercicios, artículos para aprender sobre el mundo del fitness y permite a los usuarios crear su propio plan de entrenamiento personalizado.',
            question2: '¿Necesito crear una cuenta?',
            answer2: 'No, no necesitas crear una cuenta.',
            question3: '¿Las guías de ejercicios y artículos son aptos para principiantes?',
            answer3: 'Sí, las guías de ejercicios y artículos son aptos para principiantes.',
            question4: '¿Dónde puedo encontrar las guías de ejercicios y artículos?',
            answer4: 'Puedes encontrar las guías de ejercicios y artículos en el menú de la barra de navegación, en las secciones de menú respectivas.',
            question5: '¿Cuál es la política de devoluciones para el equipo?',
            answer5: 'La política de devoluciones es de 30 días.',
        }
    }
};

const FAQ = ({ language }) => {
    const { faq } = translationFAQ[language];
    
    return (
        <Container className="mt-5">
            <h2 className="text-center mt-5 display-2"><b>Frequently Asked Questions</b></h2>
            <Accordion className='mt-5' alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <h5><b>{faq.question1}</b></h5>
                    </Accordion.Header>
                    <Accordion.Body className="AnswerText">
                        {faq.answer1}
                    </Accordion.Body>  
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <h5><b>{faq.question2}</b></h5>
                    </Accordion.Header>
                    <Accordion.Body className="AnswerText">
                        {faq.answer2}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <h5><b>{faq.question3}</b></h5>
                    </Accordion.Header>
                    <Accordion.Body className="AnswerText">
                        {faq.answer3}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>
                        <h5><b>{faq.question4}</b></h5>
                    </Accordion.Header>
                    <Accordion.Body className="AnswerText">
                        {faq.answer4}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        <h5><b>{faq.question5}</b></h5>
                    </Accordion.Header>
                    <Accordion.Body className="AnswerText">
                        {faq.answer5}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default FAQ;
