import React from 'react';
import './Description.css';

class Description extends React.Component {
	render() {
	var genre = ' ';
	for (var i = 0; i < this.props.elemToRender.genre_names.length; i++) {
		genre+=this.props.elemToRender.genre_names[i].name;
		if(i !== this.props.elemToRender.genre_names.length-1)
			genre+=", "
	}
	var actors = ' ';
	for (i = 0; i < this.props.elemToRender.actors_names.length; i++) {
		actors+=this.props.elemToRender.actors_names[i].name;
		if(i !== this.props.elemToRender.actors_names.length-1)
			actors+=", "
	}
	var studios = ' ';
	for (i = 0; i < this.props.elemToRender.studio_names.length; i++) {
		studios+=this.props.elemToRender.studio_names[i].name;
		if(i !== this.props.elemToRender.studio_names.length-1)
			studios+=", "
	}

		return (
			<div className="film-description1">
				<div className="film-name1">{this.props.elemToRender.name}</div>
				<div className="description-left-and-right-together1">
					<div className="description-row">
						<div className="left-text1"> Вік: </div>
						<div className="right-text1"> 0+</div>
					</div>
					<div className="description-row">
						<div className="left-text1"> Режисер: </div>
						<div className="right-text1"> {this.props.elemToRender.director}</div>
					</div>
					<div className="description-row">
						<div className="left-text1"> Дата релізу: </div>
						<div className="right-text1"> {this.props.elemToRender.release_date}</div>
					</div>
					<div className="description-row">
						<div className="left-text1"> Рейтинг Imdb: </div>
						<div className="right-text1"> {this.props.elemToRender.rating}</div>
					</div>
					<div className="description-row">
						<div className="left-text1"> Жанр: </div>
						<div className="right-text1"> {genre}</div>
					</div>
					<div className="description-row">
						<div className="left-text1"> Тривалість: </div>
						<div className="right-text1"> {this.props.elemToRender.duration} хв</div>
					</div>
					<div className="description-row">
						<div className="left-text1"> Виробництво: </div>
						<div className="right-text1"> {this.props.elemToRender.country_production}</div>
					</div>
					<div className="description-row">
						<div className="left-text1"> Студія: </div>
						<div className="right-text1"> {studios}</div>
					</div>
					<div className="description-row">
						<div className="left-text1"> У головних ролях: </div>
						<div className="right-text1"> {actors}</div>
					</div>
					<div className="description-row">
						<div className="left-text1"> Опис: </div>
						<div className="right-text1"> </div>
					</div>					
				</div>
				<div className="describe-film1">
					{this.props.elemToRender.description} 
	            </div>
			</div>
		)

	}
}

export default Description;