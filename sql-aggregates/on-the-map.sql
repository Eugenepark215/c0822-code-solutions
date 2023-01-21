select count ("cities".*) as "numberOfCities",
"countries"."name"
from "cities"
join "countries" using ("countryId")
group by "countries"."name";
