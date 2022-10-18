select count (*) as "numberOfFilmGenres",
"genres"."name"
from "films"
join "castMembers" using ("filmId")
join "actors" using ("actorId")
join "filmGenre" using ("filmId")
join "genres" using ("genreId")
where "actors"."firstName" = 'Lisa'
group by "genres"."name";
