import React from 'react'
import AddQuestionToCatgs from './AddQuestionToCatgs'
import AddQuizQuestion from './AddQuizQuestion'
import AddTimeSpan from './AddTimeSpan'
import QuizTimeSpanCrud from './QuizTimeSpanCrud'

function QuizSection() {
  
     return (
          <>
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Add Quiz categories</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Add Difficulty </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"> Add Questions to Category</button>
  </li>

  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#question-pill" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"> Add Quiz Questions </button>
  </li>


  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#quiz-timespan" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"> update Quiz timespan </button>
  </li>


  
  
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#quiz-timespan-crud" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"> remove Quiz timespan </button>
  </li>




</ul>
 
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
  
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
        <AddQuestionToCatgs  />
  </div>

  <div class="tab-pane fade" id="question-pill" role="tabpanel" aria-labelledby="pills-contact-tab">
         <AddQuizQuestion />
  </div>


  <div class="tab-pane fade" id="quiz-timespan" role="tabpanel" aria-labelledby="pills-contact-tab">
         <AddTimeSpan />
  </div>




  <div class="tab-pane fade" id="quiz-timespan-crud" role="tabpanel" aria-labelledby="pills-contact-tab">
         <QuizTimeSpanCrud />
  </div>


  

</div>
             
          </>
        
  )
}

export default QuizSection