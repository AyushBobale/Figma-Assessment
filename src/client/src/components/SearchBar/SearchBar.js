import './SearchBar.css';
import {MdHistory} from 'react-icons/md';
import {useState} from 'react';

function SearchBar(props) {

    const [sortedData, setSortedData] = useState([]);

    const handleSort = (e) =>{
        const input = e.target.value;
        const newArr = props.products.filter((value)=>{
            return value.toLowerCase().includes(input.toLowerCase());
        });
        if (input === "") setSortedData([])
        else setSortedData(newArr);
    }
    return (
    <div className='search-bar'>
        <div className='search-input'>
            <input type="text" placeholder={props.placeHolder} onChange={handleSort}/>
            <div className='search-icon'>{props.icon}</div>
        </div>
        
        { sortedData.length !== 0 && (
            <div className='search-results'>
            {sortedData.slice(0,15).map((product, i)=>{
                return (<a className='data-item' href='#' key={i}>
                            <MdHistory size={20}/>
                            <p>{product}</p>
                        </a>)
            })}
            </div>
        )}
    </div>
  );
}

export default SearchBar;