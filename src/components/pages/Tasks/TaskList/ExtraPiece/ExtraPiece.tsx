import { useState, useEffect } from 'react';
import MoreNavigation from '../../../../UI/moreNavigation/MoreNavigation';

import figure1 from '../../../../illustrations/piece/cube.png'
import figure2 from '../../../../illustrations/piece/icon-3d.png'
import figure3 from '../../../../illustrations/piece/icon-circle.png'
import figure4 from '../../../../illustrations/piece/icon-cone.png'
import figure5 from '../../../../illustrations/piece/icon-cylinder.png'
import figure6 from '../../../../illustrations/piece/icon-diamond.png'
import figure7 from '../../../../illustrations/piece/icon-hexagonal.png'
import figure8 from '../../../../illustrations/piece/icon-prism.png'
import figure9 from '../../../../illustrations/piece/icon-pyramid.png'

import './ExtraPiece.css'

interface IExtraPiecerProps {
  stateHeader: (state: boolean) => void;
}

function ExtraPiece({stateHeader} : IExtraPiecerProps){
  const allFigures1 = [
    {
      figure: figure1,
      figureID: 1
    },
    {
      figure: figure2,
      figureID: 2
    },
    {
      figure: figure3,
      figureID: 3
    },
    {
      figure: figure4,
      figureID: 4
    },
    {
      figure: figure5,
      figureID: 5
    },
    {
      figure: figure6,
      figureID: 6
    },
    {
      figure: figure7,
      figureID: 7
    },
    {
      figure: figure8,
      figureID: 8
    },
    {
      figure: figure9,
      figureID: 9
    },
  ]

  const [rightAnswers, setRightAnswers] = useState<number>(0)
  const [wrongAnswers, setWrongAnswers] = useState<number>(0)
  const [searchedFigureID, setSearchedFigureID] = useState()

  const [randomPiece, setRandomPiece] = useState(figure1)
  const [suffleArray, setSuffleArray] = useState(allFigures1)

  useEffect(()=>{
    randomFigure(allFigures1)
    setSuffleArray(allFigures1.sort(() => Math.random() - 0.5));
  },[])


  function randomFigure(arr: any){
    const randomIndex = Math.floor(Math.random() * arr.length);
    setRandomPiece(arr[randomIndex].figure);
    setSearchedFigureID(arr[randomIndex].figureID)
  }

  function getPiece(getID: number){
    getID === searchedFigureID ? setRightAnswers(rightAnswers + 1) : setWrongAnswers(wrongAnswers + 1)
    
    randomFigure(allFigures1)
    setSuffleArray(allFigures1.sort(() => Math.random() - 0.5));
  }

  
  return(
    <div className="task pages__wrapper task-pages">
      <div className='extra-piecer__inner'>
        <MoreNavigation stateHeader={stateHeader} rightAnswers={rightAnswers} wrongAnswers={wrongAnswers}/>
        <div className='desired-figure figure-button'><img className='figure-img' src={randomPiece && randomPiece} alt="" /></div>
        <div className='all-figures'>
          {
            suffleArray.map((figure: any) => {
              return(
                <div onClick={()=> getPiece(figure.figureID)} key={figure.figureID + 'Piece'} className='figure-button'>
                  <img className='figure-img' src={figure.figure} alt="" />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ExtraPiece