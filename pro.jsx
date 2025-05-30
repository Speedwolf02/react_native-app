import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  PanResponder,
  Text,
} from 'react-native';

const CELL_SIZE = 20;
const GRID_SIZE = 20; // 20x20 grid
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const getRandomPosition = () => {
  const x = Math.floor(Math.random() * GRID_SIZE);
  const y = Math.floor(Math.random() * GRID_SIZE);
  return { x, y };
};

const initialSnake = [
  { x: 5, y: 10 },
  { x: 4, y: 10 },
  { x: 3, y: 10 },
];

const directionsMap = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

export default function Game() {
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(getRandomPosition());
  const [direction, setDirection] = useState('right');
  const [gameOver, setGameOver] = useState(false);

  // Track last drag direction
  const lastDragDirection = useRef('right');

  // PanResponder to detect drag gestures
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const { dx, dy } = gestureState;
        if (Math.abs(dx) > Math.abs(dy)) {
          // Horizontal drag
          if (dx > 10 && lastDragDirection.current !== 'left') {
            setDirection('right');
            lastDragDirection.current = 'right';
          } else if (dx < -10 && lastDragDirection.current !== 'right') {
            setDirection('left');
            lastDragDirection.current = 'left';
          }
        } else {
          // Vertical drag
          if (dy > 10 && lastDragDirection.current !== 'up') {
            setDirection('down');
            lastDragDirection.current = 'down';
          } else if (dy < -10 && lastDragDirection.current !== 'down') {
            setDirection('up');
            lastDragDirection.current = 'up';
          }
        }
      },
    })
  ).current;

  // Move the snake every 150ms
  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      moveSnake();
    }, 150);

    return () => clearInterval(interval);
  }, [snake, direction, gameOver]);

  const moveSnake = () => {
    const head = snake[0];
    const move = directionsMap[direction];

    const newHead = {
      x: (head.x + move.x + GRID_SIZE) % GRID_SIZE,
      y: (head.y + move.y + GRID_SIZE) % GRID_SIZE,
    };

    // Check collision with self
    for (let segment of snake) {
      if (segment.x === newHead.x && segment.y === newHead.y) {
        setGameOver(true);
        return;
      }
    }

    let newSnake = [newHead, ...snake];

    // Check if food eaten
    if (newHead.x === food.x && newHead.y === food.y) {
      setFood(getRandomPosition());
    } else {
      newSnake.pop(); // Remove tail
    }

    setSnake(newSnake);
  };

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <View
        style={{
          width: CELL_SIZE * GRID_SIZE,
          height: CELL_SIZE * GRID_SIZE,
          backgroundColor: '#222',
          position: 'relative',
        }}
      >
        {/* Render snake */}
        {snake.map((segment, index) => (
          <View
            key={index}
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              backgroundColor: index === 0 ? 'lime' : 'green',
              position: 'absolute',
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              borderRadius: 4,
            }}
          />
        ))}

        {/* Render food */}
        <View
          style={{
            width: CELL_SIZE,
            height: CELL_SIZE,
            backgroundColor: 'red',
            position: 'absolute',
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
            borderRadius: CELL_SIZE / 2,
          }}
        />
      </View>

      {gameOver && (
        <View style={styles.gameOver}>
          <Text style={{ fontSize: 30, color: 'white', marginBottom: 20 }}>
            Game Over
          </Text>
          <Text
            style={styles.restartButton}
            onPress={() => {
              setSnake(initialSnake);
              setFood(getRandomPosition());
              setDirection('right');
              setGameOver(false);
              lastDragDirection.current = 'right';
            }}
          >
            Restart
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameOver: {
    position: 'absolute',
    top: SCREEN_HEIGHT / 2 - 80,
    alignItems: 'center',
  },
  restartButton: {
    fontSize: 24,
    color: 'cyan',
    textDecorationLine: 'underline',
  },
});
