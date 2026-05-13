type OpenButtonProps = {
  onOpenAside: () => void;
};
export default function OpenButton({ onOpenAside }: OpenButtonProps) {
  return (
    <div className="absolute bottom-50 right-50 z-1000">
      <button onClick={onOpenAside}>Open</button>
    </div>
  );
}
