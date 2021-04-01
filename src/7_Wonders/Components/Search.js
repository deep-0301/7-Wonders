import { React, Component } from 'react';
import data from '../API/Gec'
import People from './People';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
            data: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.setState({
            data: data
        });
        // this.refs.search.focus();
    }
    handleChange() {
        this.setState({
            searchString: this.refs.search.value
        });
    }

    render() {
        let _data = this.props.items;
        let search = this.state.searchString.trim().toLowerCase();

        if (search.length > 0) {
            _data = _data.filter(function (item) {
                return item.name.toLowerCase().match(search) ||
                    item.email.toLowerCase().match(search) ||
                    item.mobile.match(search) ||
                    item.enrollment.match(search);
            });
        }

        return (
            this.props.isLoding ? (
                <h1>Loading please be shant</h1>
            ) : (

                < div >
                    <div>
                        <input
                            type="text"
                            value={this.state.searchString}
                            ref="search"
                            onChange={this.handleChange}
                            placeholder="search anything  "
                        />
                        <br></br>
                        <section className='cards'>
                            {_data.map(item => {
                                return (
                                    <People key={item.char_id} item={item}></People>
                                );
                            })}

                        </section>
                    </div>
                </div >
            )
        );
    }
}

export default Search
