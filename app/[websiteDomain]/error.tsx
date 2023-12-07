"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="flex justify-center items-center bg-gray-200">
      <h2 className="text-lg text-gray-800">
        Something went wrong, {error.name}
      </h2>
      <p className="text-md text-gray-600">{error.message}</p>
    </div>
  );
}
