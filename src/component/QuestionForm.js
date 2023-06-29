import React, {useState} from 'react'
import "./QuestionForm.css"

import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import ShortTextIcon from '@mui/icons-material/ShortText'
import SubjectIcon from '@mui/icons-material/Subject'

import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, MenuItem, TableBody, Typography } from '@mui/material'
import FilterNoneIcon from '@mui/icons-material/FilterNone'
import AddCircleOutline from '@mui/icons-material/AddCircleOutline'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Button from '@mui/material/Button'

import CloseIcon from '@mui/icons-material/Close'
import Radio from "@mui/material/Radio"
import FormControlLabel from '@mui/material/FormControlLabel'




const QuestionForm = () => {
    const[questions,Setquestions]=useState(
        [{questionText:"What is the Question?",
          questionType:"radio",
            option:[
                {optionText:"Option 0"},
                {optionText:"Option 1"},
                {optionText:"Option 2"},
                {optionText:"Option 3"},
            ],
         open:true,
        required:false,
        image: null,  }]
    );

    function changeQuestion(text,i){
      var newQuestion=[...questions];
      newQuestion[i].questionText=text;
      Setquestions(newQuestion);
      console.log(newQuestion)
    }

    function addQuestionType(i,type){
      let qs=[...questions];
      console.log(type);
      qs[i].questionType = type;
      Setquestions(qs)
    }

    function changeOptionValue(text,i,j){
    var optionQuestion=[...questions]; 
    optionQuestion[i].option[j].optionText=text;
    Setquestions(optionQuestion)
    console.log(optionQuestion)
    }

    function removeOption(i,j){
      var RemoveOptionQuestion=[...questions];
      if(RemoveOptionQuestion[i].option.length>1){
        if (RemoveOptionQuestion[i].option[j].image) {
          URL.revokeObjectURL(RemoveOptionQuestion[i].option[j].image);
        }
        RemoveOptionQuestion[i].option.splice(j,1);
        Setquestions(RemoveOptionQuestion)
        console.log(1+"__"+j)
      }
    }

    function addOption(i){
      var optionofQuestion=[...questions];
      if(optionofQuestion[i].option.length <5){
        optionofQuestion[i].option.push({optiontext:"Option"+(optionofQuestion[i].option.length+1)})
      }else{
        console.log("Max 5 option")
      }
      Setquestions(optionofQuestion)
    }

    function copyQuestion(i){
     
    let qs=[...questions];
    var newQuestion=qs[i];
    Setquestions([...questions,newQuestion])
    }

    function deleteQuestion(i){
    let qs=[...questions];
   if(questions.length>1){
    qs.splice(i,1);
   }
  Setquestions(qs)
  }

  
 
  function addMoreQuestionField() {
   
    Setquestions([
      ...questions,
      {
        questionText: "Question",
        questionType: "radio",
        option: [{ optionText: "Option 1",optionText:"" }],
       
        open: true,
        required: false
      }
    ]);}

    
          
   


  
  
    
    


function questionsUI() {
  
    return  questions.map((ques, i) => (
 
          <div key={i}>
        <Accordion expanded={ques.open}   className={ques.open ? 'add border' : ""}>
          <AccordionSummary aria-controls='panel1a-content' id='panel1a-header' elevation={1} style={{ width: "100%" }}>
            {!ques.open ? (
              <div className="saved-question">
                <Typography style={{ fontSize: "15px", fontWeight: "400", letterSpacing: "1px", lineHeight: '24px', paddingBottom: "8px" }}>
                  {i + 1}.{questions[i].questionText}
                </Typography>
                {ques.option.map((op, j) => (
                  <div key={j}>
                    <div style={{ display: "flex" }}>
                      <FormControlLabel
                        style={{ marginLeft: "5px", marginBottom: "5px" }}
                        disabled
                        control={
                          <input
                            type={ques.questionType}
                            color="primary"
                            style={{ marginRight: "3px" }}
                            required={ques.required}
                          />
                        }
                        label={
                          <Typography style={{
                            fontFamily: "Roboto, Arial, sans-serif",
                            fontSize: '13px',
                            fontWeight: "400",
                            letterSpacing: "2px",
                            lineHeight: "20px",
                            color: "#202124"
                          }}>
                            {ques.option[j].optionText}
                          </Typography>
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </AccordionSummary>
          
          <div className="question-boxes">
            <AccordionDetails className="add-question">
                        <div className="add-question-top">
                            <input type="text" className="question"  placeholder='Question' value={ques.questionText}  onChange={(e)=>{changeQuestion(e.target.value,i)}}></input>
                            
                            <Select className="select"style={{color:"#5f6368",fontSize:"13px"}}>
                            <MenuItem id="text" value=" Text" onClick={()=>{addQuestionType(i,"text")}}><SubjectIcon style={{marginRight:"10px"}} />Paragraph</MenuItem>
                            <MenuItem id="checkbox" value=" Checkbox" onClick={()=>{addQuestionType(i,"checkbox")}}><CheckBoxIcon style={{marginRight:"10px",color:"#70757a"}} checked  />Checkbox</MenuItem>
                            <MenuItem id="radio" value=" Radio" onClick={()=>{addQuestionType(i,"radio")}}><Radio style={{marginRight:"10px" ,color:"#70757a"}} checked  />Multiple Choice </MenuItem>
                        </Select>
                        </div>
                        {ques.option.map((op,j)=>
                       <div className="add-question-body" key={j}>
                        {
                            (ques.questionType!=="text")?
                            <input type={ques.questionType} style={{marginRight:"10px"}}/>:
                            <shortTextIcon style={{marginRight:"10px"}}/>

                        }
                        <div>
                            <input type="text" className="text-input" placeholder="option" value={ques.option[j].optionText}  onChange={(e)=>{changeOptionValue(e.target.value,i,j)}}></input>
                        </div>
                       
                        <IconButton aria-label="delete">
                                <CloseIcon onClick={()=>{removeOption(i,j)}}/>
                        </IconButton>

                       
                       </div> 
                        )}



                            {ques.option.length<5 ?(
                                <div className='add-question-body'>

                                <FormControlLabel disabled control={

                                    (ques.questionType!=="text")?
                                    <input type ={ques.questionType} color ="primary" inputProps={{'aria-label':'secondary checkbox'}}  style={{marginLeft:"10px",marginRight:"10px"}} disabled/>:
                                        <ShortTextIcon style={{marginRight:"10px"}}/>
                                } label={
                                    <div>
                                      
                                      
                                       <Button size="small " onClick={()=>{addOption(i)}} style={{textTransform:"none",color:"#4285f4",fontSize:"13px",fontWeight:"600"}}>Add Option</Button>
                                       </div> }/>
                                    </div>
                            ): ""}

                        <div className="addfooter">
                            <div className="add-question-bottom-left">
                                
                            </div>
                            <div className="add-question-bottom">
                                <IconButton aria-label='Copy' onClick={()=>{copyQuestion(i)}}>
                                    <FilterNoneIcon />
                                    </IconButton>
                                    <IconButton aria-label='Delete' onClick={()=>{deleteQuestion(i)}}>
                                   <DeleteIcon />
                                    </IconButton>
                                   
                            </div>
                        </div>
            </AccordionDetails>
            <div className="question-edit">
              <AddCircleOutline onClick={addMoreQuestionField} className='edit'/>
              
            </div>
          </div>
        </Accordion>
      </div>
    
   
      
              
             
      
    ));
   
  }
  
  return (
    <div >
      <div className="question-form">
        <br/>
        <div className="section">
            <div className="question-title-section">
                <div className="question-form-top">
                    <input type="text" className='question-form-top-name' style ={{color:"black"}} placeholder='Untitled document'></input>
                    <input type="text" className='question-form-top-desc'placeholder='Form Description' ></input>
                </div>
            </div>
           
        {questionsUI()}
        </div>
      </div>
    </div>
  );
                
    };
export default QuestionForm;
