import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React ,{useState} from 'react'

export const MuiAccordion = () => {
    const [expanded,setExpanded]= useState(false)

    const handleChange=(isExpanded,panel)=>{
        setExpanded(isExpanded ? panel :false)
    }
  return (
    <>
    <Accordion id='accordion'  expanded={expanded === 'panel1'}
     onChange={(e,isExpanded)=> 
     handleChange(isExpanded,'panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant='h5'>React</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant='body2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Nam sequi eveniet reprehenderit nesciunt nulla enim.
              Ipsum repudiandae neque veniam dignissimos iure, ad eveniet,
               suscipit id sequi architecto dicta, eligendi veritatis.
        </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion id='Javascript'
     expanded={expanded === 'panel2'}
     onChange={(e,isExpanded)=>handleChange(isExpanded,'panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant='h5'>Javascript</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant ='body1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Quia dicta ipsum ipsam libero esse ut nobis,
             officia cum alias quidem consequuntur ducimus
              mollitia deleniti unde inventore nostrum voluptatibus? Eius, nisi?
              </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion id='typescript'
     expanded={expanded === 'panel3'}
     onChange={(e,isExpanded)=>handleChange(isExpanded,'panel3')}
     >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography  variant='h5'>
                TypeScript
            </Typography>
        </AccordionSummary  >
        <AccordionDetails>
            <Typography  variant='body2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Excepturi eius natus dicta a quod hic suscipit optio voluptatem
                  consequuntur libero. Officiis pariatur vero neque eum facilis nihil illum soluta odio.
            </Typography>
        </AccordionDetails>
    </Accordion>
    
    
    </>
  )
}
