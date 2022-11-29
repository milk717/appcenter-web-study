export default function ApparentCalculate(T, V){
    return `${13.12 + 0.6215 * T - 11.37*Math.pow(V, 0.16)+0.3965*Math.pow(V, 0.16)*T}`.slice(0,4)
}