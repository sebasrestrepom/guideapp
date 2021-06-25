export class SaveResultResponse {
  id: number;
  studentId: number;
  detail: SaveResultDetailResponse[];
}

export class SaveResultDetailResponse {
  id: number;
  resultId: number;
  questionId: number;
  value: string;
}
