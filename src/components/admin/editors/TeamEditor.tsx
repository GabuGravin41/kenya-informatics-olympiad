import { useEditor } from "../useEditor";
import { StringField, SectionHeader, Card, AddButton, ListControls, SaveBar, ImageUploadField } from "../FormFields";

interface Member {
  name: string; role: string; org: string; initials: string; image: string;
}
interface TeamData { members: Member[] }

const blank = (): Member => ({ name: "", role: "", org: "", initials: "", image: "" });
const updateAt = <T,>(arr: T[], i: number, val: T) => arr.map((x, idx) => (idx === i ? val : x));
const removeAt = <T,>(arr: T[], i: number) => arr.filter((_, idx) => idx !== i);
function moveUp<T>(arr: T[], i: number) { if (i === 0) return arr; const a = [...arr]; [a[i-1], a[i]] = [a[i], a[i-1]]; return a; }
function moveDown<T>(arr: T[], i: number) { if (i === arr.length - 1) return arr; const a = [...arr]; [a[i], a[i+1]] = [a[i+1], a[i]]; return a; }

export function TeamEditor() {
  const { data, loading, loadError, dirty, saveStatus, saveError, setData, save } = useEditor<TeamData>("team");

  if (loading) return <div style={info}>Loading…</div>;
  if (loadError) return <div style={err}>Error: {loadError}</div>;
  if (!data) return null;

  const upd = (members: Member[]) => setData(() => ({ members }));

  return (
    <div style={layout}>
      <SectionHeader title="Team Members" description="Edit the team roster shown on /team" />

      {data.members.map((m, i) => (
        <Card key={i}>
          <ListControls
            index={i} total={data.members.length}
            onMoveUp={() => upd(moveUp(data.members, i))}
            onMoveDown={() => upd(moveDown(data.members, i))}
            onDelete={() => upd(removeAt(data.members, i))}
          />
          <div style={grid2}>
            <StringField label="Full name" value={m.name} onChange={(v) => upd(updateAt(data.members, i, { ...m, name: v }))} />
            <StringField label="Role / title" value={m.role} onChange={(v) => upd(updateAt(data.members, i, { ...m, role: v }))} />
          </div>
          <StringField label="Organisation / affiliation" value={m.org} onChange={(v) => upd(updateAt(data.members, i, { ...m, org: v }))} />
          <div style={grid2}>
            <StringField
              label="Initials (1–3 chars, shown if no photo)"
              value={m.initials}
              onChange={(v) => upd(updateAt(data.members, i, { ...m, initials: v.slice(0, 3) }))}
              placeholder="e.g. KS"
            />
            <ImageUploadField
              label="Photo"
              value={m.image}
              onChange={(v) => upd(updateAt(data.members, i, { ...m, image: v }))}
            />
          </div>
        </Card>
      ))}

      <AddButton label="Add team member" onClick={() => upd([...data.members, blank()])} />

      <SaveBar status={saveStatus} error={saveError ?? undefined} onSave={save} dirty={dirty} />
    </div>
  );
}

const layout: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 16, paddingBottom: 80 };
const grid2: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 };
const info: React.CSSProperties = { color: "#64748b", padding: 40, textAlign: "center" };
const err: React.CSSProperties = { color: "#f87171", padding: 40, background: "rgba(239,68,68,0.05)", borderRadius: 8 };
