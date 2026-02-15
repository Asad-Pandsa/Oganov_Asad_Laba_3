import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSenateMemberById, clearSelectedMember } from "../features/students/studentsSlice";  // Исправлено название

const StudentDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { selectedMember, status } = useSelector(state => state.students);  // selectedMember вместо selectedStudent

  useEffect(() => {
    dispatch(fetchSenateMemberById(id));  // Исправлено название
  }, [dispatch, id]);

  if (status === "loading") return <p>Загрузка студента...</p>;
  if (!selectedMember) return null;  // selectedMember вместо selectedStudent

  return (
    <div className="container">
      <button
        onClick={() => {
          dispatch(clearSelectedMember());  // Исправлено название
          navigate("/");
        }}
      >
        ← Назад
      </button>

      <h2>{selectedMember.name}</h2>  {/* selectedMember вместо selectedStudent */}
      <p><b>Возраст:</b> {selectedMember.age}</p>
      <p><b>Группа:</b> {selectedMember.direction}</p>
      <p><b>Пост:</b> {selectedMember.post}</p>
      <p><b>Описание:</b> {selectedMember.description}</p>
    </div>
  );
};

export default StudentDetail;