export const initialBoardState: Piece[] = []

const pieces: Piece[] = [];

export enum teamType{
    OPPONENT,
    OUR
}

export const horizontalSquares=['a','b','c','d','e','f','g','h'];
export const verticalSquares=["1","2","3","4","5","6","7","8"];

export interface Position {
    x: number
    y: number
}

export interface Piece{
    image: string
    position: Position
    type: pieceType
    team : teamType
}

export enum pieceType{
    PAWN,
    BISHOP,
    KNIGHT,
    ROOK,
    QUEEN,
    KING
}

initialBoardState.push({image:`/images/rook_b.png`, position:{x:0,y: 7}, type: pieceType.ROOK, team : teamType.OPPONENT})
initialBoardState.push({image:`/images/rook_b.png`, position:{x:7,y: 7}, type: pieceType.ROOK, team : teamType.OPPONENT})
initialBoardState.push({image:`/images/rook_w.png`, position:{x:0,y: 0}, type: pieceType.ROOK, team : teamType.OUR})
initialBoardState.push({image:`/images/rook_w.png`, position:{x:7,y: 0}, type: pieceType.ROOK, team : teamType.OUR})

initialBoardState.push({image:`/images/knight_b.png`,position:{ x:1,y: 7}, type: pieceType.KNIGHT, team : teamType.OPPONENT})
initialBoardState.push({image:`/images/knight_b.png`,position:{x:6,y: 7}, type: pieceType.KNIGHT, team : teamType.OPPONENT})
initialBoardState.push({image:`/images/knight_w.png`,position:{x:1,y: 0}, type: pieceType.KNIGHT, team : teamType.OUR})
initialBoardState.push({image:`/images/knight_w.png`,position:{x:6,y: 0}, type: pieceType.KNIGHT, team : teamType.OUR})

initialBoardState.push({image:`/images/bishop_b.png`, position:{x:2,y: 7}, type: pieceType.BISHOP, team : teamType.OPPONENT})
initialBoardState.push({image:`/images/bishop_b.png`, position:{x:5,y: 7}, type: pieceType.BISHOP , team : teamType.OPPONENT})
initialBoardState.push({image:`/images/bishop_w.png`, position:{x:2,y: 0}, type: pieceType.BISHOP, team : teamType.OUR})
initialBoardState.push({image:`/images/bishop_w.png`, position:{x:5,y: 0}, type: pieceType.BISHOP, team : teamType.OUR})

initialBoardState.push({image:`/images/queen_w.png`, position:{x:3,y: 0}, type: pieceType.QUEEN, team : teamType.OUR})
initialBoardState.push({image:`/images/queen_b.png`, position:{x:3,y: 7}, type: pieceType.QUEEN, team : teamType.OPPONENT})
initialBoardState.push({image:`/images/king_b.png`, position:{x:4,y: 7}, type: pieceType.KING, team : teamType.OPPONENT})
initialBoardState.push({image:`/images/king_w.png`, position:{x:4,y: 0}, type: pieceType.KING, team : teamType.OUR})

initialBoardState.push({image: '/images/pawn_b.png',position:{ x:0, y:6}, type: pieceType.PAWN, team : teamType.OPPONENT})
initialBoardState.push({image: '/images/pawn_b.png',position:{x:1, y:6}, type: pieceType.PAWN, team : teamType.OPPONENT})
initialBoardState.push({image: '/images/pawn_b.png',position: {x:2, y:6}, type: pieceType.PAWN, team : teamType.OPPONENT})
initialBoardState.push({image: '/images/pawn_b.png',position: {x:3, y:6}, type: pieceType.PAWN, team : teamType.OPPONENT})
initialBoardState.push({image: '/images/pawn_b.png',position: {x:4, y:6}, type: pieceType.PAWN, team : teamType.OPPONENT})
initialBoardState.push({image: '/images/pawn_b.png',position: {x:5, y:6}, type: pieceType.PAWN, team : teamType.OPPONENT})
initialBoardState.push({image: '/images/pawn_b.png',position: {x:6, y:6}, type: pieceType.PAWN, team : teamType.OPPONENT})
initialBoardState.push({image: '/images/pawn_b.png',position: {x:7, y:6}, type: pieceType.PAWN, team : teamType.OPPONENT})

initialBoardState.push({image: '/images/pawn_w.png',position: {x:0, y:1}, type: pieceType.PAWN, team : teamType.OUR})
initialBoardState.push({image: '/images/pawn_w.png',position:{x:1, y:1}, type: pieceType.PAWN, team : teamType.OUR})
initialBoardState.push({image: '/images/pawn_w.png',position: {x:2, y:1}, type: pieceType.PAWN, team : teamType.OUR})
initialBoardState.push({image: '/images/pawn_w.png',position: {x:3, y:1}, type: pieceType.PAWN, team : teamType.OUR})
initialBoardState.push({image: '/images/pawn_w.png',position: {x:4, y:1}, type: pieceType.PAWN, team : teamType.OUR})
initialBoardState.push({image: '/images/pawn_w.png',position:{ x:5, y:1}, type: pieceType.PAWN, team : teamType.OUR})
initialBoardState.push({image: '/images/pawn_w.png',position:{x:6, y:1}, type: pieceType.PAWN, team : teamType.OUR})
initialBoardState.push({image: '/images/pawn_w.png',position:{x:7, y:1}, type: pieceType.PAWN, team : teamType.OUR})

export const gridSize = 100

export function samePosition(p1: Position, p2:Position){
    return p1.x === p2.x && p1.y === p2.y;
}   





