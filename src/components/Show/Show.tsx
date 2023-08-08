import { useEffect, useState } from "react";
import { getParsed } from "../../ws/api-service";
import { PersonType } from "./types";

const ShowData = () => {
  const [people, setPeople] = useState<PersonType[]>([]);

  const fetchParsed = async () => {
    const showResponse = await getParsed();

    if (!showResponse.error) {
      setPeople(showResponse);
    }
  };

  useEffect(() => {
    fetchParsed();
  }, []);

  return (
    <div>
      <h2>Últimos Registros:</h2>
      <ul>
        {people.map((person) => (
          <li key={person.user_info_id}>
            {`${person.first_name} ${person.last_name} ${person.user_id}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowData;
