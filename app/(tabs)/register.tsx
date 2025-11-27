
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { z } from "zod";

export default function App() {
  const userSchema = z.object({
    username: z
      .string()
      .min(5, { message: "Username must be at least 5 characters." })
      .max(30, { message: "Username must be at most 30 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    age: z.number().min(18, { message: "You must be over 18 years old." }),
  });

  type UserFormType = z.infer<typeof userSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormType>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<UserFormType> = (data: UserFormType) => {
    console.log(data);
  };

  return (
    <View>
      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <View>
            <TextInput
              mode="outlined"
              label="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              activeOutlineColor={error ? "red" : "black"}
              style={styles.input}
            />
          </View>
        )}
        name="username"
      />
      {errors.username && (
        <Text style={{ color: "#ff8566" }}>{errors.username.message}</Text>
      )}

      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextInput
            mode="outlined"
            label="E-mail"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            activeOutlineColor={error ? "red" : "black"}
            style={styles.input}
          />
        )}
        name="email"
      />
      {errors.email && (
        <Text style={{ color: "#ff8566" }}>{errors.email.message}</Text>
      )}

      <Controller
        control={control}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <TextInput
            mode="outlined"
            label="Age"
            onBlur={onBlur}
            onChangeText={(text) => {
              const parsed = parseInt(text, 10);
              onChange(isNaN(parsed) ? "" : parsed);
            }}
            value={
              value === null || value === undefined ? "" : value.toString()
            }
            placeholder=""
            keyboardType="numeric"
            activeOutlineColor={error ? "red" : "black"}
            style={styles.input}
          />
        )}
        name="age"
      />
      {errors.age && (
        <Text style={{ color: "#ff8566" }}>{errors.age.message}</Text>
      )}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
  },

});