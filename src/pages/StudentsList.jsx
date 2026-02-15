import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchSenateMembers } from "../features/students/studentsSlice";

const StudentsList = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.students);

  useEffect(() => {
    dispatch(fetchSenateMembers());
  }, [dispatch]);

  if (status === "loading") return <p>Загрузка списка студентов...</p>;

  return (
    <div className="container">
      <h1>Сенаторы</h1>
      <ul>
        {items.map(student => (
          <li key={student.id}>
            <Link to={`/student/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;