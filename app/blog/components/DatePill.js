import { format } from "date-fns";

export default function DatePill({ date }) {
  if (!date) {
    return null;
  }

  try {
    return (
      <div className="inline-flex items-center gap-2">
        <span className="text-xs">📅</span>
        <p className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r from-secondary-700 to-primary-900/30 text-secondary-100 border border-secondary-600">
          {format(new Date(date), "MMMM dd, yyyy")}
        </p>
      </div>
    );
  } catch (error) {
    console.error('Error formatting date:', error);
    return null;
  }
}
