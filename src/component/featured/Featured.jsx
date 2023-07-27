import "./Featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

const Featured = ({type}) => {
    return (
       <div className="featured">
        {
            type && (
                <div className="category">
                    <span>{type==="movies" ? "Movies":"Series"}</span>
                    <select name="genre" id="genre">
                    <option value="">Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="crime">Crime</option>
                    </select>
                </div>
            )
        }


     <img  src="https://scontent.fccu19-1.fna.fbcdn.net/v/t1.6435-9/137225618_10218895634758011_8501166647151742772_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8631f5&_nc_ohc=V0MDY7hcp0UAX_z_o3Z&_nc_ht=scontent.fccu19-1.fna&oh=00_AfAQjSl9PGRV7XbeCKQ__Xnp-rmzQUuZnzlMeK53Xw4-tQ&oe=63D7B42F"  alt="" />
       
        <div className="info">
           <img src="img1.png" alt="" />
          <span className="desc">A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.</span>
        <div className="buttons">
            <button className="play">
              <PlayArrowIcon/>
              <span>Play</span>
            </button>
            <button className="more">
                <InfoIcon/>
                <span>Info</span>
            </button>
            </div>
        </div>
       </div>
    );
}

export default Featured;
